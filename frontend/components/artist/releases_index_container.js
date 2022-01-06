import { connect } from "react-redux";
import ReleasesIndex from "./releases_index";
import { fetchArtistReleases, getDiscography } from "../../actions/release_actions";


const mSTP = state => ({
    releases: Object.values(state.entities.releases)
});

const mDTP = (dispatch, ownProps) => ({
    fetchReleases: () => dispatch(fetchArtistReleases(ownProps.match.params.id))
});

export default connect(mSTP, mDTP)(ReleasesIndex);