import { connect } from "react-redux";
import ArtistPageNav from "./artist_page_nav";

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = dispatch => ({
    logOut: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(ArtistPageNav);