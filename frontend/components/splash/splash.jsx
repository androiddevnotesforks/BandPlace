import React from "react";
import NavBarContainer from "./nav_bar_container";
import Footer from "./footer";
import TopStories from "./top_stories";
import CarouselContainer from "./carousel_container";
import DiscoverBarContainer from "./discover_bar_container";

const Splash = () => (
    <div className="splash">
        <header>
            <NavBarContainer />
            {/* SHOULD STICK BUT DISAPPEAR ON IDLE BY "DISCOVER"s */}
        </header>
        <div className="splash-main">
            <TopStories />
            <CarouselContainer />
            {/* new & notable */}
            {/* bandplace daily */}
            <DiscoverBarContainer />
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default Splash;