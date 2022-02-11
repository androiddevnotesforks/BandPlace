import React from "react";
import NavBarContainer from "./nav_bar_container";
import Footer from "./footer";
import TopStories from "./top_stories";
import CarouselContainer from "./carousel_container";
import DiscoverBarContainer from "./discover_bar_container";
import { fetchAllIds } from "../../actions/user_actions";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.pauseCarousel = this.pauseCarousel.bind(this);
        this.resumeCarousel = this.resumeCarousel.bind(this);
    }

    componentDidMount(){
        fetchAllIds().then(response => {
            this.setState({users: response})
        });
        this.intervalId = setInterval(this.props.getRandom, 2500);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    pauseCarousel(){
        clearInterval(this.intervalId);
    }

    resumeCarousel(){
        this.props.getRandom();
        this.intervalId = setInterval(this.props.getRandom, 2500);
    }



    render() {
        let mainDivClass;
        this.props.loggedIn ? mainDivClass = "splash-main logged-in" : mainDivClass = "splash-main logged-out";
        if (!this.state) {
            return null;
        }

        return (
            <div className="splash">
                <header>
                    <NavBarContainer 
                        pauseCarousel={this.pauseCarousel}
                        resumeCarousel={this.resumeCarousel}/>
                </header>
                <div className={mainDivClass}>
                    <TopStories />
                    <CarouselContainer 
                        getRandom={this.props.getRandom}
                        pauseCarousel={this.pauseCarousel}
                        resumeCarousel={this.resumeCarousel}/>
                    <div className="showcase">
                        <h4>"FEATURED" (aka "seeded") ARTISTS:</h4>
                        <div className="display-boxes">

                            <div className="display-box">
                                <div className="artist-profile-image rizzos"/>
                                <p>
                                    A gang? A band? Whatever they are, they're also act you wish played your high school prom. 
                                </p>
                                <Link to={`/storefront/${this.state.users['The Rizzos'].id}`}>
                                    The Rizzos
                                </Link>
                            </div>
                            <div className="display-box">
                                <div className="artist-profile-image cabs"/>
                                <p>
                                    Big hooks, bigger feelings, and lots of guitars.
                                </p>
                                <Link to={`/storefront/${this.state.users['El Silver Cabs'].id}`}>
                                    El Silver Cabs
                                </Link>
                            </div>
                            <div className="display-box">
                                <div className="artist-profile-image leaked"/>
                                <p>
                                    Who are these enigmatic garage-loop-synth-power-pop weirdos? It's literally just me and my buddy Katie.
                                </p>
                                <Link to={`/storefront/${this.state.users['Leaked'].id}`}>
                                    Leaked
                                </Link>
                            </div>
                            <div className="display-box">
                                <div className="artist-profile-image t-rex"/>
                                <p>
                                    Riding a white swan all the way to the underworld.
                                </p>
                                <Link to={`/storefront/${this.state.users['T. Rex'].id}`}>
                                    T. Rex
                                </Link>
                            </div>
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