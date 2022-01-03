import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { withRouter } from "react-router-dom";
import { signup } from "../../actions/session_actions";

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'signup',
    formTitle: 'Sign Up for an Artist Account'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup({user: user}))
});



export default withRouter(connect(mSTP, mDTP)(SignupForm));