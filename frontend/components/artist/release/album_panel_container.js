import { connect } from "react-redux";
import AlbumPanel from "./album_panel";
import { fetchRelease } from "../../../actions/release_actions";
import { fetchArtist } from "../../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId),
    albumInfo: state.entities.releases[ownProps.match.params.albumId],
    albumArtist: state.entities.users[ownProps.match.params.artistId]
});

const mDTP = (dispatch, ownProps) => ({
    fetchRelease: () => dispatch(fetchRelease(ownProps.match.params.albumId)),
    fetchAlbumArtist: () => dispatch(fetchArtist(ownProps.match.params.artistId))
});

export default connect(mSTP, mDTP)(AlbumPanel);