import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { destroyRelease } from "../../../actions/release_actions";
import { destroySong } from "../../../actions/song_actions";
import { closeModal } from "../../../actions/modal_actions";

import Deletor from "./deletor";

const mSTP = (state, ownProps) => {
    let type;
    let contentId;
    const locationArr = ownProps.location.pathname.split('/');
    if (locationArr.includes('storefront') && locationArr.includes('album')) {
        type = 'release';
        contentId = locationArr.slice(-1);
    } else {
        if (locationArr.includes('storefront')) {
            contentId = locationArr.slice(-1);
            type = 'song-page';
        } else {
            contentId = null;
            type = 'edit-page';
        }
    }
    // debugger
    return {
        type,
        contentId,
        goToStorefront: () => ownProps.history.push(`/storefront/${state.session.currentUserId}`),
    }
}

const mDTP = (dispatch) => {
    return {
    destroyRelease: (albumId) => dispatch(destroyRelease(albumId)),
    destroySong: (songId) => dispatch(destroySong(songId)),
    closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mSTP, mDTP)(Deletor));