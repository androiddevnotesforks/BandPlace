import React from "react";
import ArtistPageNav from "./artist_page_nav";
import StoreNav from "./store_nav";
import { StorefrontFooter } from "./storefront_footer";
import ReleasesIndex from "./releases_index";
import Sidebar from "./sidebar";

class Storefront extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="storefront-main"> 
                < ArtistPageNav />
                {/* TRYPTICH IS 1 OUTER BACKGROUND w/ONE INNER CONTENT BOX*/}
                <div className="storefront-tryptich">
                    {/* DISPLAY WINDOW HAS 3 ROWS */}
                    <div className="storefront-displaywindow">
                        <div className="storefront-banner">
                            {/* BANNER IMAGE GOES HERE */}
                        </div>
                        < StoreNav />
                        {/* DISPLAY IS FLEX-ROW, 2 ROWS */}
                        <div className="storefront-display">
                            < ReleasesIndex />
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