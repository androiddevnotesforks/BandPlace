import { connect } from "react-redux";
import Splash from "./splash";
import { getRandomRec } from "../../actions/release_actions";

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId)
})

const mDTP = dispatch => ({
    getRandom: () => dispatch(getRandomRec())
})

export default connect(mSTP, mDTP)(Splash);