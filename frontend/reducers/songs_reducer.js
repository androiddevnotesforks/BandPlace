import { RECEIVE_RELEASE_SONGS, RECEIVE_SONG } from "../actions/song_actions";

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
    }
}

export default songsReducer;