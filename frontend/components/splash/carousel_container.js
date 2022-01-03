import { connect } from "react-redux";
import Carousel from "./carousel";

const mSTP = state => ({
    records: state
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Carousel);