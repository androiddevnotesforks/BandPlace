import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReleasesIndex from "./releases_index";
import { fetchArtistReleases } from "../../actions/release_actions";


const mSTP = state => ({
    releases: Object.values(state.entities.releases)
});

const mDTP = (dispatch, ownProps) => ({
    fetchReleases: () => dispatch(fetchArtistReleases(ownProps.match.params.artistId))
});

export default withRouter(connect(mSTP, mDTP)(ReleasesIndex));