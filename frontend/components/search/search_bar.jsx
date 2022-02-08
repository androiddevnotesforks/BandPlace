import React from "react";
import { SearchIcon } from "../icons";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            focused: false,
            hasResults: false
        }
        this.timer = null;
        this.openFocus = this.openFocus.bind(this);
        this.closeFocus = this.closeFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        // this.sortResults = this.sortResults.bind(this);
        // this.mergeStep = this.mergeStep.bind(this);
        this.goToFullResults = this.goToFullResults.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.searchResults !== this.props.searchResults) {
            const hasResults = Object.values(this.props.searchResults).filter (arr => arr.length > 0);
            // debugger
            if (hasResults.length > 0) {
                this.buildDropDown();
            }
        }
    }

    openFocus(){
        this.setState({focused: true});
    }

    closeFocus(){
        this.setState({focused: false});
    }

    handleChange(e){
        this.setState({query: e.target.value});
    }

    handleSearch(e){
        if (e.key === 'Enter') {
            const query = this.state.query;
            this.props.searchUsers(query)
                .then(() => this.props.searchReleases(query))
                .then(() => this.props.searchSongs(query))
        }
    }

    buildDropDown(){
        const resultsList = document.getElementById('search-preview');
        const allUsers = this.props.searchResults.users;
        const allAlbums = this.props.searchResults.albums;
        const allSongNames = this.props.searchResults.songs;
        const allSearchables = allUsers.concat(allAlbums).concat(allSongNames);
        const sortedSearchables = this.sortResults(allSearchables);
        const topResults = sortedSearchables.slice(0, 5);
        debugger
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

    goToFullResults(e){
        if (this.state.query !== '') {

        }
    }

    render(){
        return (
            <div className="search-bar">
                <input type="text" 
                    placeholder="Search for artist, album, or track" 
                    onFocus={this.openFocus} 
                    onBlur={this.closeFocus} 
                    onChange={this.handleChange} 
                    onKeyPress={this.handleSearch} 
                    value={this.state.query} />
                <SearchIcon onClick={this.goToFullResults} />
                <ul id="search-preview" className="invisible">
                    <li id="full-results">
                        {/* <Link */}
                    </li>
                </ul>
            </div>
        )
    }
}

export default SearchBar;