import { connect } from "react-redux";
import FanSignupForm from "./fan_signup_form";
import { withRouter } from "react-router-dom";
import { signup } from "../../actions/session_actions";

const mSTP = (state) => ({
    errors: Object.values(state.errors),
    formTitle: 'Sign up for a Bandplace fan account'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup({user: user}))
});



export default withRouter(connect(mSTP, mDTP)(FanSignupForm));