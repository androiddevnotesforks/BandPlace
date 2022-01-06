import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import { fetchArtist } from "../../actions/user_actions";


const mSTP = (state, ownProps) => ({
    artistInfo: state.entities.users[ownProps.match.params.artistId],
    isMainPage: Boolean(ownProps.location.pathname.split('/').length <= 4)
});

const mDTP = (dispatch, ownProps) => ({
    fetchArtistInfo: () => dispatch(fetchArtist(ownProps.match.params.artistId))
});


export default withRouter(connect(mSTP, mDTP)(Sidebar));