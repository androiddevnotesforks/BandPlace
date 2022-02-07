import { RECEIVE_RELEASE_SONGS, RECEIVE_SONG, DELETE_SONG } from "../actions/song_actions";

const defaultState = {};

const songsReducer = (state = defaultState, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_RELEASE_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            return Object.assign({}, state, {[action.song.id]: action.song});
        case DELETE_SONG:
            debugger
    }
}

export default songsReducer;