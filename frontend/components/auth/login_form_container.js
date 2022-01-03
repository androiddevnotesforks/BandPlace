import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = (state) => ({
    errors: state.errors.session,
    formTitle: 'Log In'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login({user: user}))
});

export default withRouter(connect(mSTP, mDTP)(LoginForm));