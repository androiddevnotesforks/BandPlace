import { connect } from "react-redux";
import DiscoverBar from "./discover_bar";

const mSTP = state => ({
    genres: ['electronic', 'rock', 'hip-hop', 'pop', 'ambient'],
    subgenres: {
        electronic: ['any', 'house', 'electronica', 'techno', 'drum \& bass', 'trance'],
        rock: ['any', 'indie', 'prog rock', 'post-rock', 'garage rock', 'punk'],
        'hip-hop': ['any', 'rap', 'underground', 'trap', 'boom-bap', 'grime'],
        pop: ['any', 'indie pop', 'synth pop', 'new wave', 'dream pop', 'hyperpop'],
        ambient: ['any', 'chill-out', 'drone', 'dark ambient', 'soundscapes', 'atmospheric']
    }
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(DiscoverBar);