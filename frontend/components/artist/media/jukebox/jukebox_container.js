import { connect } from "react-redux";
import Jukebox from "./jukebox";

const mSTP = state => ({
    playlistSongs: Object.values(state.entities.songs)
});

export default connect(mSTP)(Jukebox);