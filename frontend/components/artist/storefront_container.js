import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Storefront from "./storefront";

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId),
    // isOwner: (state.session.currentUserId === ownProps.match.params.id)
});

const mDTP = (dispatch, ownProps) => ({
});

export default connect(mSTP, mDTP)(Storefront);
