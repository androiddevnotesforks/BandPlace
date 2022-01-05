import { connect } from "react-redux";
import FanSignupForm from "./fan_signup_form";
import { withRouter } from "react-router-dom";
import { signup, receiveErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
    errors: state.errors.session,
    formTitle: 'Sign up for a Bandplace fan account'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup({user: user})),
    updateErrors: (errors) => dispatch(receiveErrors(errors)),
    closeModal: () => dispatch(closeModal())
});



export default withRouter(connect(mSTP, mDTP)(FanSignupForm));