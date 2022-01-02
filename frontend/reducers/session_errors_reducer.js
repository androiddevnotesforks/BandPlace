import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

const defaultState = {errors: []}

const sessionErrorsReducer = (state = defaultState, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_CURRENT_USER:
            return defaultState;
        case RECEIVE_SESSION_ERRORS:
            return {errors: action.errors};
    };
};

export default sessionErrorsReducer;