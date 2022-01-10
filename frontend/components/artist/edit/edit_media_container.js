import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditMedia from "./edit_media";

const mSTP = (state, ownProps) => ({
    albumId: ownProps.match.params.albumId,
    trackId: ownProps.match.params.trackId
});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP, mDTP)(EditMedia));