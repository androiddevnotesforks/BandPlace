import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../actions/session_actions";

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'signup',
    formTitle: 'Sign Up for an Artist Account'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);