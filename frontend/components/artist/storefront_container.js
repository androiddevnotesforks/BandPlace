import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Storefront from "./storefront";
import { fetchRelease } from "../../../actions/release_actions";
import { fetchArtist } from "../../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId),
    thisArtist: state.entities.users[ownProps.match.params.artistId]
});

const mDTP = (dispatch, ownProps) => ({
    // fetchAlbum: () => dispatch(fetchRelease(ownProps.match.params.albumId)),
    fetchArtist: () => dispatch(fetchArtist(ownProps.match.params.artistId)),
    fetchAllReleases: () => dispatch(fetchArtistReleases(ownProps.match.params.artistId))
});

export default connect(mSTP, mDTP)(Storefront);
