import { RECEIVE_USER_ERRORS } from "../actions/user_actions";

const defaultState = [];

const usersErrorsReducer = (state = defaultState, action) => {

    Object.freeze(state);

    switch (action.type) {
        default: 
            return state;
        case RECEIVE_USER_ERRORS:
            return action.errors;
    }
}

export default usersErrorsReducer;