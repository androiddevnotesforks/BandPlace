import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MediaPanel from "./media_panel";
// import { fetchRelease } from "../../../actions/release_actions";
// import { fetchArtist } from "../../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId),
    albumInfo: state.entities.releases[ownProps.match.params.albumId],
    albumArtist: state.entities.users[ownProps.match.params.artistId]
});

// const mDTP = (dispatch, ownProps) => ({
// });

export default withRouter(connect(mSTP, null)(MediaPanel));