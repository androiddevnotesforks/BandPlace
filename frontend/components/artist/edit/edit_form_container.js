import { connect } from "react-redux";
import EditForm from "./edit_form";
import { fetchArtist, updateUser } from "../../../actions/user_actions";

// MAKE SURE TO CHECK LOGGED-IN USER IS THE OWNER OF WHATEVER THEY'RE TRYING TO EDIT

const mSTP = (state, ownProps) => ({
    loggedInAsProfileOwner: (state.session.currentUserId === parseInt(ownProps.match.params.id)),
    currentUser: state.entities.users[ownProps.match.params.id],
    goToStorefront: () => ownProps.history.push(`/storefront/${ownProps.match.params.id}`)
});

const mDTP = (dispatch, ownProps) => ({
    fetchUserData: () => dispatch(fetchArtist(ownProps.match.params.userId)),
    updateUser: (userData) => dispatch(updateUser(userData)) 
});

export default connect(mSTP, mDTP)(EditForm);