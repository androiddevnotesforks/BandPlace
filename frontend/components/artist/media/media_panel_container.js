import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MediaPanel from "./media_panel";
import { fetchReleaseSongs, fetchSong } from "../../../actions/song_actions";
import { fetchRelease } from "../../../actions/release_actions";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId),
    isOwner: (state.session.currentUserId === parseInt(ownProps.match.params.artistId)),
    artistId: ownProps.match.params.artistId,
    albumId: ownProps.match.params.albumId,
    trackList: Object.values(state.entities.songs),
    trackId: ownProps.match.params.trackid,
    albumInfo: state.entities.releases[ownProps.match.params.albumId],
    songInfo: state.entities.songs[ownProps.match.params.trackId],
    albumArtist: state.entities.users[ownProps.match.params.artistId],
});

const mDTP = (dispatch, ownProps) => ({
    fetchReleaseSongs: () => dispatch(fetchReleaseSongs(ownProps.match.params.albumId)),
    fetchSong: () => dispatch(fetchSong(ownProps.match.params.trackId)),
    // fetchRelease: (albumId) => dispatch(fetchRelease(albumId))
});

export default withRouter(connect(mSTP, mDTP)(MediaPanel));