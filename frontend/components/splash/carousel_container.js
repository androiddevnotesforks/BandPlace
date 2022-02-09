import { connect } from "react-redux";
import Carousel from "./carousel";
import { getRandomRec } from "../../actions/release_actions";

const mSTP = state => ({
    record: state.entities.releases
    // ['Loveless', 'Voices', 'Warren Zevon', 'Tusk', 'The Cars', 'Last Splash', 'American Thighs',
    //         'Graceland', 'Nattesferd', 'Welcome Interstate Managers', 'Songs In The Key Of Life', 'Rid Of Me',
    //         'Goo', 'Maggot Brain', 'Mothership Connection', 'Something For Thee Hotties', 'Electric Warrior', 
    //         'Low', 'Definitely Maybe', 'I Should Coco', "You'd Prefer An Astronaut", 'Clean', 'Fantastic Planet']
});

const mDTP = dispatch => ({
    getRandom: () => dispatch(getRandomRec())
});

export default connect(mSTP, mDTP)(Carousel);