import { connect } from "react-redux";
import ArtistSignupForm from "./artist_signup_form";
import { withRouter } from "react-router-dom";
import { signup, receiveErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
    errors: state.errors.session,
    formTitle: 'Sign Up for an Artist Account'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup({user: user})),
    updateErrors: (errors) => dispatch(receiveErrors(errors))
});



export default withRouter(connect(mSTP, mDTP)(ArtistSignupForm));