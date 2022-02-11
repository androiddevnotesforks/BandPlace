import { RECEIVE_RELEASE_ERRORS } from "../actions/release_actions";
import { RECEIVE_SONG_ERRORS } from "../actions/song_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

const defaultState = [];

const contentErrorsReducer = (state = defaultState, action) => {
    
    Object.freeze(state);

    switch (action.type){
        default:
            return state;
        case RECEIVE_RELEASE_ERRORS:
            return action.errors;
        case RECEIVE_SONG_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return defaultState;
    }
}

export default contentErrorsReducer;