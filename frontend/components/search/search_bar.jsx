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
        // this.sortResults = this.sortResults.bind(this);
        // this.mergeStep = this.mergeStep.bind(this);
        this.getResultsList = this.getResultsList.bind(this);
        this.goToFullResults = this.goToFullResults.bind(this);
    }

    componentDidUpdate(prevProps){
        const resultsList = document.getElementById('search-preview');
        if (prevProps.searchResults !== this.props.searchResults) {
            const hasResults = Object.values(this.props.searchResults).filter (arr => arr.length > 0);
            if (hasResults.length > 0) {
                resultsList.className = '';
                this.buildTopResults();
            } else {
                resultsList.className = 'invisible';
            }
        }
    }

    openFocus(){
        this.setState({focused: true});
        if (this.state.topResults.length !== 0) document.getElementById('search-preview').className = '';
    }

    closeFocus(){
        this.setState({focused: false});
        document.getElementById('search-preview').className = 'invisible';
    }

    handleChange(e){
        if (e.target.value === '') {
            this.props.clearSearch();
            this.setState({
                query: e.target.value,
                hasResults: false,
                topResults: []
            })
        } else {
            this.setState({query: e.target.value});
        }
    }

    handleSearch(e){
        if ((e.key === 'Enter' || e.type === 'click') && this.state.query !== '') {
            const query = this.state.query;
            this.props.searchUsers(query)
                .then(() => this.props.searchReleases(query))
                .then(() => this.props.searchSongs(query))
        }
    }

    buildTopResults(){
        const allUsers = this.props.searchResults.users;
        const allAlbums = this.props.searchResults.albums;
        const allSongNames = this.props.searchResults.songs;
        const allSearchables = allUsers.concat(allAlbums).concat(allSongNames);
        const sortedSearchables = this.sortResults(allSearchables);
        const topResults = sortedSearchables.slice(0, 5);
        this.setState({
            topResults
        })
    }

    sortResults(results){
        if (results.length === 1) return results;
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
                <li key={idx} className="search-result-li" onClick={() => this.props.goToDestination(`${destination}`)}>
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

    goToFullResults(e){
        if (this.state.query !== '') {
            
        }
    }

    render(){
        let resultsList;
        if (this.state.topResults.length === 0) {
            resultsList = null;
        } else {
            resultsList = this.getResultsList();
        }
        return (
            <div className="search-bar">
                <input type="text" 
                    placeholder="Search for artist, album, or track" 
                    onFocus={this.openFocus} 
                    onChange={this.handleChange} 
                    onKeyPress={this.handleSearch} 
                    value={this.state.query} />
                <span onClick={this.handleSearch}>
                <SearchIcon className="icon" />
                </span>
                <ul id="search-preview" className="invisible">
                    <li className="filter-selector">
                        <span className="filter-active">all</span>
                        <span>artists</span>
                        <span>albums</span>
                        <span>tracks</span>
                    </li>
                    {resultsList}
                    {/* <li id="full-results">
                        <Link
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default SearchBar;