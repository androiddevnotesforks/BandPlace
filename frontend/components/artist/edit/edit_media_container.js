import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createSong } from "../../../actions/song_actions";
import { createRelease } from "../../../actions/release_actions";
import EditMedia from "./edit_media";

const mSTP = (state, ownProps) => ({
    albumId: ownProps.match.params.albumId,
    trackId: ownProps.match.params.trackId
});

const mDTP = dispatch => ({
    createSong: (song) => dispatch(createSong(song)),
    createRelease: (release) => dispatch(createRelease(release))
});

export default withRouter(connect(mSTP, mDTP)(EditMedia));