import { searchUsers, searchReleases, searchTracks } from "../util/search_util";

export const RECEIVE_SEARCH_USERS = "RECEIVE_SEARCH_USERS";
export const RECEIVE_SEARCH_RELEASES = "RECEIVE_SEARCH_RELEASES";
export const RECEIVE_SEARCH_SONGS = "RECEIVE_SEARCH_SONGS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

const receiveSearchUsers = users => ({
    type: RECEIVE_SEARCH_USERS,
    users
})
const receiveSearchReleases = releases => ({
    type: RECEIVE_SEARCH_RELEASES,
    releases
})
const receiveSearchSongs = songs => ({
    type: RECEIVE_SEARCH_SONGS,
    songs
})

const clearSearch = () => ({
    type: CLEAR_SEARCH
})

const receiveErrors = errors => ({
    type: RECEIVE_SEARCH_ERRORS,
    errors
})

const searchUsernames = userQuery => dispatch => (
    searchUsers(userQuery).then(users => dispatch(receiveSearchUsers(users)), errors => dispatch(receiveErrors(errors.responseJSON)))
)
const searchReleaseTitles = releaseQuery => dispatch => (
    searchReleases(releaseQuery).then(releases => dispatch(receiveSearchReleases(releases)), errors => dispatch(receiveErrors(errors.responseJSON)))
)
const searchSongs = songQuery => dispatch => (
    searchTracks(songQuery).then(songs => dispatch(receiveSearchSongs(songs)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

const clearSearchResults = () => dispatch(clearSearch);

export { searchUsernames, searchReleaseTitles, searchSongs, clearSearchResults }