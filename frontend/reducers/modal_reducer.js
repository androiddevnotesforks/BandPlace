import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const defaultState = null;

const modalReducer = (state = defaultState, action) => {

    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case OPEN_MODAL:
            return action.modal
        case CLOSE_MODAL:
            return null;
    }
}

export default modalReducer;