import { connect } from "react-redux";
import ArtistSignupForm from "./artist_signup_form";
import { withRouter } from "react-router-dom";
import { signup } from "../../actions/session_actions";

const mSTP = (state) => ({
    errors: Object.values(state.errors),
    formTitle: 'Sign Up for an Artist Account'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup({user: user}))
});



export default withRouter(connect(mSTP, mDTP)(ArtistSignupForm));