import { searchTracks } from "../util/search_util";

export const RECEIVE_SEARCH_SONGS = "RECEIVE_SEARCH_SONGS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

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

const searchSongs = songQuery => dispatch => (
    searchTracks(songQuery).then(songs => dispatch(receiveSearchSongs(songs)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

export { searchSongs }