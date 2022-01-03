import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import React from "react";

const mSTP = (state, ownProps) => ({

});

const mDTP = (dispatch, ownProps) => ({
    openMenu: () => dispatch(openModal('fan-signup')),
    openArtistSignup: () => {
        dispatch(closeModal());
        ownProps.history.push('/signup');
    }
});

function SignupMenu(props) {
    return (
        <div className="signup-menu">
            <div>
                <button onClick={props.openMenu}>Sign up as a fan</button>
            </div>
            <div>
                <button onClick={props.openArtistSignup}>Sign up as an artist</button>
            </div>
            <div>
                <button>Sign up as a label</button>
            </div>
        </div>
    )
}

export default withRouter(connect(mSTP, mDTP)(SignupMenu));