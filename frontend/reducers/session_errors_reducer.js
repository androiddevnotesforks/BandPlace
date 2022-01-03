import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";

const defaultState = []

const sessionErrorsReducer = (state = defaultState, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_CURRENT_USER:
            return defaultState;
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return defaultState;
    };
};

export default sessionErrorsReducer;