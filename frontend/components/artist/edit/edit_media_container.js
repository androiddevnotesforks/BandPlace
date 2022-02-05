import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createSong, fetchReleaseSongs } from "../../../actions/song_actions";
import { createRelease, fetchRelease } from "../../../actions/release_actions";
import EditMedia from "./edit_media";

const mSTP = (state, ownProps) => ({
    albumId: ownProps.match.params.albumId,
    activeTrack: null,
    artist: state.entities.users[state.session.currentUserId]
});

const mDTP = (dispatch, ownProps) => ({
    createSong: (song) => dispatch(createSong(song)),
    createRelease: (release) => dispatch(createRelease(release)),
    fetchRelease: () => dispatch(fetchRelease(ownProps.match.params.albumId)),
    fetchReleaseSongs: () => dispatch(fetchReleaseSongs(ownProps.match.params.albumId))
});

export default withRouter(connect(mSTP, mDTP)(EditMedia));