import React from "react";
import { SearchIcon } from "../icons";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            focused: false,
            hasResults: false,
            topResults: []
        }
        this.timer = null;
        this.openFocus = this.openFocus.bind(this);
        this.closeFocus = this.closeFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
        this.getResultsList = this.getResultsList.bind(this);
    }

    componentDidUpdate(prevProps){
        const resultsList = document.getElementById('search-preview');
        if (prevProps.searchResults !== this.props.searchResults) {
            const hasResults = Object.values(this.props.searchResults).filter (arr => arr.length > 0);
            if (hasResults.length > 0) {
                resultsList.className = '';
                this.buildTopResults('all');
            } else {
                resultsList.className = 'invisible';
            }
        }
    }

    openFocus(e){
        e.preventDefault();
        this.setState({focused: true});
        this.props.pauseCarousel();
        if (this.state.topResults.length !== 0 || this.state.query !== '') document.getElementById('search-preview').className = '';
    }

    closeFocus(e){
        e.preventDefault();
        this.setState({focused: false});
        this.props.resumeCarousel();
        document.getElementById('search-preview').className = 'invisible';
    }

    handleChange(e){
        if (this.timeoutId) clearTimeout(this.timeoutId);
        if (e.target.value === '') {
            this.props.clearSearch();
            this.setState({
                query: e.target.value,
                hasResults: false,
                topResults: []
            })
        } else {
            this.timeoutId = setTimeout(() => this.handleSearch(null, true), 1000); 
            this.setState({query: e.target.value});
        }
    }

    handleSearch(e, autoSearch = false){
        if (this.timeoutId) clearTimeout(this.timeoutId);
        if ((autoSearch || (e.key === 'Enter' || e.type === 'click')) && this.state.query !== '') {
            const query = this.state.query;
            this.props.searchUsers(query)
                .then(() => this.props.searchReleases(query))
                .then(() => this.props.searchSongs(query))
        } 
    }

    selectFilter(type){
        return e => {
            e.preventDefault();
            document.querySelector('.filter-active').className = "";
            e.target.className = 'filter-active';
            this.buildTopResults(type);
        }
    }

    buildTopResults(type){
        const allUsers = this.props.searchResults.users;
        const allAlbums = this.props.searchResults.albums;
        const allSongNames = this.props.searchResults.songs;
        const allSearchables = allUsers.concat(allAlbums).concat(allSongNames);
        let sortedSearchables;
        switch (type) {
            case 'artists':
                sortedSearchables = this.sortResults(allUsers);
                break;
            case 'albums':
                sortedSearchables = this.sortResults(allAlbums);
                break;
            case 'tracks':
                sortedSearchables = this.sortResults(allSongNames);
                break;
            case 'all':
                sortedSearchables = this.sortResults(allSearchables);
                break;
        }
        const topResults = sortedSearchables.slice(0, 5);
        this.setState({
            topResults
        })
    }

    sortResults(results){
        if (results.length === 1 || results.length === 0) return results;
        const left = results.slice(0, results.length/2);
        const right = results.slice(results.length/2);
        return this.mergeStep(this.sortResults(left), this.sortResults(right));
    }

    mergeStep(set1, set2){
        const query = this.state.query;
        const merged = [];
        while (set1.length > 0 && set2.length > 0) {
            const obj1 = set1.shift();
            const obj2 = set2.shift();
            const compareString1 = this.getResultType(obj1).resultString;
            const compareString2 = this.getResultType(obj2).resultString;
            if (compareString1.indexOf(query) <= compareString2.indexOf(query)) {
                merged.push(obj1);
                merged.push(obj2);
            } else {
                merged.push(obj2);
                merged.push(obj1);
            }
        }
        if (set1.length > 0) {
            merged.concat(set1);
        } else {
            merged.concat(set2);
        }
        return merged;
    }

    getResultType(obj){
        let resultString;
        let resultType;

        if ('username' in obj) {
            resultString = obj.username;
            resultType = 'user';
        } else if ('title' in obj) {
            resultString = obj.title;
            resultType = 'ALBUM';
        } else {
            resultString = obj.name;
            resultType = 'TRACK';
        }
        return {resultString, resultType}
    }

    getResultsList(){
        if (this.state.topResults.length === 0 && this.state.query !== '') {
            return (
                <li className="search-result-li">
                    <span>
                        sorry, no results match that search!
                    </span>
                </li>
            )
        }
        return this.state.topResults.map ((item, idx) => {
            let resultType = this.getResultType(item).resultType;
            const resultString = this.getResultType(item).resultString;
            let artUrl = '';
            let authorshipTag;
            let destination;
            switch (resultType) {
                case 'user':
                    if (item.profPicUrl) artUrl = "url(" + item.profPicUrl + ")";
                    destination = `/storefront/${item.id}`;
                    authorshipTag = null;
                    if (item.is_artist === true) {
                        resultType = 'ARTIST';
                    } else {
                        resultType = 'FAN';
                    }
                    break;
                case 'ALBUM':
                    if (item.coverArtUrl) artUrl = "url(" + item.coverArtUrl + ")";
                    destination = `/storefront/${item.artist_id}/album/${item.id}`;
                    authorshipTag = (<span>by {item.artist.username}</span>)
                    break;
                case 'TRACK':
                    if (item.albumArtUrl) artUrl = "url(" + item.albumArtUrl + ")";
                    destination = `/storefront/${item.track_artist.id}/track/${item.id}`;
                    authorshipTag = (<span>by {item.track_artist.username}</span>)
                    break;
            }

            return (
                <li key={idx} className="search-result-li" onMouseDown={() => this.props.goToDestination(`${destination}`)}>
                    <div className={`art-box ${resultType}`} style={{backgroundImage: `${artUrl}`, backgroundSize: 'cover'}}/>
                    <div className="search-result-info-box">
                        <h4>{resultString}</h4>
                        {authorshipTag}
                        <p>{resultType}</p>
                    </div>
                </li>
            )
        }) 
    }

    render(){
        const resultsList = this.getResultsList();
        let barType;
        this.props.loggedIn ? barType = 'logged-in' : barType = 'logged-out';
        return (
            <div className={`search-bar ${barType}`} key={'unique-search-bar-key'} onBlur={this.closeFocus} > 
                <input type="text" id="search-input"
                    placeholder="Search for artist, album, or track"  
                    onChange={this.handleChange} 
                    onKeyPress={this.handleSearch} 
                    onFocus={this.openFocus} 
                    value={this.state.query} />
                <span onClick={this.handleSearch}>
                    <SearchIcon className="icon" />
                </span>
                <ul id="search-preview" className="invisible" >
                    <li className="filter-selector" onFocus={this.openFocus} >
                        <span className="filter-active" onMouseDown={this.selectFilter('all')}>all</span>
                        <span onMouseDown={this.selectFilter('artists')}>artists</span>
                        <span onMouseDown={this.selectFilter('albums')}>albums</span>
                        <span onMouseDown={this.selectFilter('tracks')}>tracks</span>
                    </li>
                    {resultsList}
                </ul>
            </div>
        )
    }
}

export default SearchBar;