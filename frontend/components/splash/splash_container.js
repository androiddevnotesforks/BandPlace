import { connect } from "react-redux";
import Splash from "./splash";

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId)
})

export default connect(mSTP, null)(Splash);