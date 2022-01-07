import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Storefront from "./storefront";
import { fetchArtistReleases } from "../../actions/release_actions";
import { fetchArtist } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId),
    thisArtist: state.entities.users[ownProps.match.params.artistId],
    thisCatalog: Object.values(state.entities.releases)
});

const mDTP = (dispatch, ownProps) => ({
    fetchArtist: () => dispatch(fetchArtist(ownProps.match.params.artistId)),
    fetchAllReleases: () => dispatch(fetchArtistReleases(ownProps.match.params.artistId))
});

export default connect(mSTP, mDTP)(Storefront);
