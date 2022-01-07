import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReleasesIndex from "./releases_index";
import { fetchArtistReleases } from "../../actions/release_actions";


const mSTP = state => ({
    releases: Object.values(state.entities.releases)
});

export default withRouter(connect(mSTP, null)(ReleasesIndex));