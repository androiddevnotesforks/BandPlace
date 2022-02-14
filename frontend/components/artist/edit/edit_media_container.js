import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createSong, fetchReleaseSongs, updateSong } from "../../../actions/song_actions";
import { createRelease, fetchRelease, updateRelease } from "../../../actions/release_actions";
import EditMedia from "./edit_media";
import { destroySong } from "../../../actions/song_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return {
    albumId: ownProps.match.params.albumId,
    activeTrack: null,
    artist: state.entities.users[state.session.currentUserId],
    goToStorefront: () => ownProps.history.push(`/storefront/${state.session.currentUserId}`),
    errors: state.errors.content
    }
};

const mDTP = (dispatch, ownProps) => ({
    createSong: (song) => dispatch(createSong(song)),
    createRelease: (release) => dispatch(createRelease(release)),
    fetchRelease: () => dispatch(fetchRelease(ownProps.match.params.albumId)),
    fetchReleaseSongs: () => dispatch(fetchReleaseSongs(ownProps.match.params.albumId)),
    updateRelease: (releaseData) => dispatch(updateRelease(ownProps.match.params.albumId, releaseData)),
    updateSong: (songId, songData) => dispatch(updateSong(songId, songData)),
    deleteSong: songId => dispatch(destroySong(songId))
});

export default withRouter(connect(mSTP, mDTP)(EditMedia));