import { connect } from "react-redux";
import EditForm from "./edit_form";
import { fetchArtist, updateUser } from "../../../actions/user_actions";

// MAKE SURE TO CHECK LOGGED-IN USER IS THE OWNER OF WHATEVER THEY'RE TRYING TO EDIT

const mSTP = (state, ownProps) => ({
    loggedInAsOwner: (state.session.currentUserId === parseInt(ownProps.match.params.userId)),
    currentUser: state.entities.users[ownProps.match.params.userId],
    goToStorefront: () => ownProps.history.push(`/storefront/${ownProps.match.params.userId}`)
});

const mDTP = (dispatch, ownProps) => ({
    fetchUserData: () => dispatch(fetchArtist(ownProps.match.params.userId)),
    updateUser: (userData) => dispatch(updateUser(userData)) 
});

export default connect(mSTP, mDTP)(EditForm);