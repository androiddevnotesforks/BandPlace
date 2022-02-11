import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { Headphones, Records, Mic } from "../icons";
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
            <h3>Sign up for a Bandplace account <span onClick={() => dispatch(closeModal())}>x</span></h3>
            <div className="category-box headphones">
                < Headphones />
                <div>
                    <button onClick={props.openMenu}>Sign up as a fan</button>
                    {/* <p></p> */}
                </div>
            </div>
            <div className="category-box mic">
                < Mic />
                <div>
                    <button onClick={props.openArtistSignup}>Sign up as an artist</button>
                    <p>Upload new music, edit old releases, and customize your band's storefront</p>
                </div>
            </div>
            <div className="category-box record">
                < Records />
                <div>
                    <button disabled>Sign up as a label</button>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(connect(mSTP, mDTP)(SignupMenu));