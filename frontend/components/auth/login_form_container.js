import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'login',
    formTitle: 'Log In'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login({user: user}))
});

export default withRouter(connect(mSTP, mDTP)(LoginForm));