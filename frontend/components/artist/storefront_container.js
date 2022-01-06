import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Storefront from "./storefront";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId)
    // pageArtistId: ownProps.match.params.artistId,
    // pageAlbumId: ownProps.match.params.albumId,
    // pageTrackId: ownProps.match.params.trackId
});

const mDTP = (dispatch, ownProps) => ({
});

export default connect(mSTP, mDTP)(Storefront);
