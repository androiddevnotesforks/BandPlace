import { postSong, getSongsByRelease, getSong, patchSong, deleteSong } from "../util/content_api_util";


export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_RELEASE_SONGS = "RECEIVE_RELEASE_SONGS";
export const DELETE_SONG = "DELETE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";


const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});

const receiveReleaseSongs = (songs) => ({
    type: RECEIVE_RELEASE_SONGS,
    songs
});

const removeSong = (song) => ({
    type: DELETE_SONG,
    song
}) 

const receiveErrors = (errorsArr) => ({
    type: RECEIVE_SONG_ERRORS,
    errors: errorsArr
});

const createSong = songData => dispatch => (
    postSong(songData).then(song => dispatch(receiveSong(song)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

const fetchReleaseSongs = releaseId => dispatch => (
    getSongsByRelease(releaseId).then(songs => dispatch(receiveReleaseSongs(songs)), errors => {
        // debugger
        return dispatch(receiveErrors(errors.responseJSON))})
);

const fetchSong = songId => dispatch => (
    getSong(songId).then(song => dispatch(receiveSong(song)), error => dispatch(receiveErrors(error.responseJSON)))
);

const updateSong = (songId, songData) => dispatch => (
    patchSong(songId, songData).then(song => dispatch(receiveSong(song)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

const destroySong = songId => dispatch => (
    deleteSong(songId).then(song => dispatch(removeSong(song)), errors => dispatch(receiveErrors(errors.responseJSON)))
)



export { createSong, fetchReleaseSongs, fetchSong, updateSong, destroySong };