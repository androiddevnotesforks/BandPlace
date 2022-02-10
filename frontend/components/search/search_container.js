import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./search_bar";
import { searchUsernames, searchReleaseTitles, searchSongs, clearSearchResults } from "../../actions/search_actions";

const mSTP = (state, ownProps) => {
    return {
        inNav: ownProps.location.pathname.includes('search'),
        searchResults: {
            users: Object.values(state.search.users),
            albums: Object.values(state.search.releases),
            songs: Object.values(state.search.songs)
        },
        goToDestination: destination => ownProps.history.push(destination),
        loggedIn: Boolean(state.session.currentUserId)
    }
}

const mDTP = dispatch => ({
    searchUsers: (query) => dispatch(searchUsernames(query)), 
    searchReleases: (query) => dispatch(searchReleaseTitles(query)), 
    searchSongs: (query) => dispatch(searchSongs(query)),
    clearSearch: () => dispatch(clearSearchResults())
})

export default withRouter(connect(mSTP, mDTP)(SearchBar));