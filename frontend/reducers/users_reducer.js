import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
    };
};

export default usersReducer;