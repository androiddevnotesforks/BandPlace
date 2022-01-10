import { postSong, getSongsByRelease, getSong } from "../util/content_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_RELEASE_SONGS = "RECEIVE_RELEASE_SONGS";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";

const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});

const receiveReleaseSongs = (songs) => ({
    type: RECEIVE_RELEASE_SONGS,
    songs
});

const receiveErrors = (errorsArr) => ({
    type: RECEIVE_SONG_ERRORS,
    errors: errorsArr
});

const createSong = song => dispatch => (
    postSong(song).then(song => dispatch(receiveSong(song)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

const fetchReleaseSongs = releaseId => dispatch => (
    getSongsByRelease(releaseId).then(songs => dispatch(receiveReleaseSongs(songs)), errors => {
        debugger
        return dispatch(receiveErrors(errors.responseJSON))})
);

const fetchSong = songId => dispatch => (
    getSong(songId).then(song => dispatch(receiveSong(song)), error => dispatch(receiveErrors(error.statusText)))
);

export { createSong, fetchReleaseSongs, fetchSong };