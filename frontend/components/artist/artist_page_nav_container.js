import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import ArtistPageNav from "./artist_page_nav";

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.entities.users[state.session.currentUserId],
})

const mDTP = (dispatch, ownProps) => ({
    logOut: () => dispatch(logout()),
    openColorsEditor: () => dispatch(openModal('colors-editor'))
})

export default connect(mSTP, mDTP)(ArtistPageNav);