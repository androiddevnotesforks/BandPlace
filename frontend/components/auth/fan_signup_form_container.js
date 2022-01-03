import { connect } from "react-redux";
import FanSignupForm from "./fan_signup_form";
import { withRouter } from "react-router-dom";
import { signup, receiveErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
    errors: state.errors.session,
    formTitle: 'Sign up for a Bandplace fan account'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup({user: user})),
    updateErrors: (errors) => dispatch(receiveErrors(errors))
});



export default withRouter(connect(mSTP, mDTP)(FanSignupForm));