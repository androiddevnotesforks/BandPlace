import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const defaultState = {currentUserId: null};

export default sessionReducer = (state = defaultState, action) => {

    Object.freeze(state);

    switch (action.type) {
        default: 
            return state;
        case RECEIVE_CURRENT_USER:
            return {currentUserId: action.user.id, currentUserType: action.user.is_artist}
        case LOGOUT_CURRENT_USER:
            return defaultState;
    }
};

