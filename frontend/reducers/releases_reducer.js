import { RECEIVE_ARTIST_RELEASES, RECEIVE_RELEASE, DELETE_RELEASE } from "../actions/release_actions";

const defaultState = {};

const releasesReducer = (state = defaultState, action) => {
    
    Object.freeze(state);  
    let newState = Object.assign({}, state);

    switch (action.type) {
        default: 
            return state;
        case RECEIVE_ARTIST_RELEASES:
            return action.releases;
        case RECEIVE_RELEASE:
            return action.release;
        case DELETE_RELEASE:
            delete newState[action.release.id];
            return newState;
    }
}

export default releasesReducer;