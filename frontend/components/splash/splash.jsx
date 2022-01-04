import React from "react";
import NavBarContainer from "./nav_bar_container";
import Footer from "./footer";
import TopStories from "./top_stories";
import CarouselContainer from "./carousel_container";
import DiscoverBarContainer from "./discover_bar_container";

class Splash extends React.Component {
    constructor(props){
        super(props);
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
                    <div className="placeholder" />
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