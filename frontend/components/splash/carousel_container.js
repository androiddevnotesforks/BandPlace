import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Carousel from "./carousel";
// import { getRandomRec } from "../../actions/release_actions";

const mSTP = (state, ownProps) => ({
    record: state.entities.releases,
    goToRecord: (artistId, albumId) => ownProps.history.push(`/storefront/${artistId}/album/${albumId}`)
    // ['Loveless', 'Voices', 'Warren Zevon', 'Tusk', 'The Cars', 'Last Splash', 'American Thighs',
    //         'Graceland', 'Nattesferd', 'Welcome Interstate Managers', 'Songs In The Key Of Life', 'Rid Of Me',
    //         'Goo', 'Maggot Brain', 'Mothership Connection', 'Something For Thee Hotties', 'Electric Warrior', 
    //         'Low', 'Definitely Maybe', 'I Should Coco', "You'd Prefer An Astronaut", 'Clean', 'Fantastic Planet']
});

const mDTP = dispatch => ({
    // getRandom: () => dispatch(getRandomRec())
});

export default withRouter(connect(mSTP, mDTP)(Carousel));