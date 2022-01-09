import React from "react";
import { closeModal } from "../actions/modal_actions";
import FanSignupFormContainer from "./auth/fan_signup_form_container";
import SignupMenu from "./auth/signup_menu";
import { connect } from "react-redux";
import PageColorsEditorContainer from "./artist/edit/page_colors_editor_container";

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
            component = <FanSignupFormContainer />;
            break;
        case 'colors-editor':
            component = <PageColorsEditorContainer />;
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