import React from "react";
import { Switch, Route } from "react-router-dom";
import ArtistPageNav from "./artist_page_nav";
import StoreNav from "./store_nav";
import { StorefrontFooter } from "./storefront_footer";
import ReleasesIndex from "./releases_index";
import AlbumPanelContainer from "./release/album_panel_container";
import SongPanelContainer from "./song/song_panel_container";
import Sidebar from "./sidebar";

class Storefront extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="profile-main"> 
                < ArtistPageNav />
                <div className="profile-tryptich">
                    <div className="profile-displaywindow">
                        <div className="storefront-banner">
                            {/* BANNER IMAGE GOES HERE */}
                        </div>
                        < StoreNav />
                        <div className="storefront-display">
                            <Switch>
                                <Route path='/storefront/artist' component={ReleasesIndex} />
                                <Route path='/storefront/album' component={AlbumPanelContainer} />
                                <Route path='/storefront/track' component={SongPanelContainer} />
                            </Switch>
                            < Sidebar />
                        </div>
                    </div>
                </div>
                < StorefrontFooter />
            </div>
        )
    }
}

export default Storefront;