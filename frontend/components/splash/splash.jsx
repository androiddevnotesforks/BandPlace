import React from "react";
import NavBarContainer from "./nav_bar_container";
import Footer from "./footer";
import TopStories from "./top_stories";
import CarouselContainer from "./carousel_container";
import DiscoverBarContainer from "./discover_bar_container";
import { fetchAllIds } from "../../actions/user_actions";

class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const ids = fetchAllIds();
        // debugger
    }

    render() {
        
        let mainDivClass;
        this.props.loggedIn ? mainDivClass = "splash-main logged-in" : mainDivClass = "splash-main logged-out";

        return (
            <div className="splash">
                <header>
                    <NavBarContainer />
                </header>
                <div className={mainDivClass}>
                    <TopStories />
                    <CarouselContainer />
                    <div className="showcase">
                        <h4>"FEATURED" (aka "seeded") ARTISTS:</h4>
                        <div className="display-box rizzos">
                            <div className="artist-profile-image"/>
                            <p>
                                A gang? A band? Whatever they are, they're also act you wish played your high school prom. 
                            </p>
                        </div>
                        <div className="display-box cabs">
                            <div className="artist-profile-image"/>
                            Big hooks, bigger feelings, and lots of guitars.
                        </div>
                        <div className="display-box leaked">
                            <div className="artist-profile-image"/>
                            Who are these enigmatic garage-loop-synth-power-pop weirdos? It's literally just me and my buddy Katie.
                        </div>
                        <div className="display-box t-rex">
                            <div className="artist-profile-image"/>
                            Riding a white swan all the way to the underworld.
                        </div>
                    </div>
                    <DiscoverBarContainer />
                    <div className="discover-results" />
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }
}

export default Splash;