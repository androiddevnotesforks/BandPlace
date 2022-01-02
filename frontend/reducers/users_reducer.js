import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
    };
};

export default usersReducer;