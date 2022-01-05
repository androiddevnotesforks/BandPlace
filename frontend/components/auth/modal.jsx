import React from "react";
import { closeModal } from "../../actions/modal_actions";
import FanSignupFormContainer from "./fan_signup_form_container";
import SignupMenu from "./signup_menu";
import { connect } from "react-redux";

function Modal({modal, closeModal}) {
    
    
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'signup-menu':
            component = <SignupMenu />;
            break;
        case 'fan-signup':
            component = <FanSignupFormContainer />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);