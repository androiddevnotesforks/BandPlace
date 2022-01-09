import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch, ownProps) => ({
    openSignupMenu: () => dispatch(openModal('signup-menu')),
    openColorsEditor: () => dispatch(openModal('colors-editor')).then(() => ownProps.history.push(`/storefront/${state.session.currentUserId}`)),
    logOut: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);