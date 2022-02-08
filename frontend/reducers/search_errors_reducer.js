import { CLEAR_SEARCH, RECEIVE_SEARCH_ERRORS } from "../actions/search_actions";

const defaultState = {};

const searchErrorsReducer = (state = defaultState, action) => {

    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_SEARCH_ERRORS:
            return action.errors;
        case CLEAR_SEARCH:
            return defaultState;
    }
}

export default searchErrorsReducer;