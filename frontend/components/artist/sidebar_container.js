import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import { updateUser } from "../../actions/user_actions";


const mSTP = (state, ownProps) => ({
    artistInfo: state.entities.users[ownProps.match.params.artistId],
    loggedInAsOwner: (state.session.currentUserId === parseInt(ownProps.match.params.artistId)),
    isMainPage: Boolean(ownProps.location.pathname.split('/').length <= 4)
});

const mDTP = (dispatch, ownProps) => ({
    updateUser: (userData) => dispatch(updateUser(userData))
})

export default withRouter(connect(mSTP, mDTP)(Sidebar));







// import { fetchArtist } from "../../actions/user_actions";

// const mDTP = (dispatch, ownProps) => ({
//     fetchArtistInfo: () => dispatch(fetchArtist(ownProps.match.params.artistId))
// });