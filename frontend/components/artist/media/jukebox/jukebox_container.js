import { connect } from "react-redux";
import Jukebox from "./jukebox";

const mSTP = state => ({
    playlistSongs: Object.values(state.entities.songs)
});

// const mDTP = dispatch => ({

// })

export default connect(mSTP)(Jukebox);