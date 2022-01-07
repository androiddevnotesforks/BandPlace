import React from "react";
import { Switch, Route } from "react-router-dom";
import ArtistPageNavContainer from "./artist_page_nav_container";
import StoreNav from "./store_nav";
import { StorefrontFooter } from "./storefront_footer";
import ReleasesIndexContainer from "./releases_index_container";
import MediaPanelContainer from "./media/media_panel_container";
import SidebarContainer from "./sidebar_container";

class Storefront extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            crateDive: false,
        }
    }

    componentDidMount(){
        this.props.fetchArtist();
        this.props.fetchAllReleases();
    }

    componentDidUpdate(){
        if (!this.state.crateDive) {
            this.setState({crateDive: true});
        }
    }

    render(){
        if (!this.props.thisArtist || !this.state.crateDive) {
            return null;
        }
        return (
            <div className="profile-main"> 
                < ArtistPageNavContainer loggedIn={this.props.loggedIn} />
                <div className="profile-tryptich">
                    <div className="profile-displaywindow">
                        <div className="storefront-banner">
                            {/* BANNER IMAGE GOES HERE */}
                        </div>
                        < StoreNav />
                        <div className="storefront-display">
                            <Switch>
                                <Route path='/storefront/:artistId/album/:albumId' render={() => <MediaPanelContainer pageType={'album'}/>} />
                                <Route path='/storefront/:artistId/track/:trackId' render={() => <MediaPanelContainer pageType={'song'}/>} />
                                <Route path='/storefront/:artistId' component={ReleasesIndexContainer} />
                            </Switch>
                            < SidebarContainer />
                        </div>
                    </div>
                </div>
                < StorefrontFooter />
            </div>
        )
    }
}

export default Storefront;