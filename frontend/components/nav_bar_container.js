import { connect } from "react-redux";
import { openModal } from "../actions/modal_actions";
import { logout } from "../actions/session_actions";
import NavBar from "./nav_bar";

const mSTP = state => ({
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    openSignupMenu: () => dispatch(openModal('signup-menu')),
    logOut: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);