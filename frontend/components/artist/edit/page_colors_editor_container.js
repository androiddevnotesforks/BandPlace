import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageColorsEditor from "./page_colors_editor";
import { openModal } from "../../../actions/modal_actions";
import { updateUser } from "../../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    colorsArr: state.entities.users[state.session.currentUserId].color_profile.split('/'),
    currentUserId: state.session.currentUserId
});

const mDTP = dispatch => ({
    updateColors: (colorData) => dispatch(updateUser(colorData)) 
});


export default connect(mSTP, mDTP)(PageColorsEditor);