import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MediaPanel from "./media_panel";
import { fetchReleaseSongs, fetchSong } from "../../../actions/song_actions";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId),
    artistId: ownProps.match.params.artistId,
    albumId: ownProps.match.params.albumId,
    trackId: ownProps.match.params.trackid,
    albumInfo: state.entities.releases[ownProps.match.params.albumId],
    songInfo: state.entities.songs[ownProps.match.params.trackId],
    albumArtist: state.entities.users[ownProps.match.params.artistId],
});

const mDTP = (dispatch, ownProps) => ({
    fetchReleaseSongs: () => dispatch(fetchReleaseSongs(ownProps.match.params.albumId)),
    fetchSong: () => dispatch(fetchSong(ownProps.match.params.trackId))
});

export default withRouter(connect(mSTP, mDTP)(MediaPanel));