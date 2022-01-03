import { connect } from "react-redux";
import DiscoverBar from "./discover_bar";

const mSTP = state => ({
    genres: ['electronic', 'rock', 'hip-hop', 'pop', 'ambient'],
    subgenres: {
        electronic: ['house', 'electronica', 'techno', 'drum & bass', 'trance'],
        rock: ['indie', 'prog rock', 'post-rock', 'garage rock', 'punk'],
        'hip-hop': ['rap', 'underground', 'trap', 'boom-bap', 'grime'],
        pop: ['indie pop', 'synth pop', 'new wave', 'dream pop', 'hyperpop'],
        ambient: ['chill-out', 'drone', 'dark ambient', 'soundscapes', 'atmospheric']
    }
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(DiscoverBar);