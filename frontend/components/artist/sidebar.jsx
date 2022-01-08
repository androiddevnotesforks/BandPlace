import React from "react";
import ReleasesIndexContainer from "./releases_index_container";
import { Link } from "react-router-dom";
import BioUpdater from "./edit/bio_updater";

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if (!this.props.artistInfo) {
            return null;
        }
        const artist = this.props.artistInfo;
        if (this.props.isMainPage) {
            return (
                <div className="sidebar">
                    <div className="artist-image">
                        <span>-click to add profile image-</span>
                    </div>
                    <div>
                        <h4>
                            {artist.username}
                        </h4>
                        <span>{artist.location}</span>
                    </div>
                    <p className="artist-bio visible">
                        {artist.bio}
                    </p>
                    < BioUpdater artist={this.props.artistInfo} isOwner={this.props.loggedInAsOwner} updateBio={this.props.updateUser} />
                </div>
            )
        } else {
            return (
                <div className="sidebar">
                    <div className="artist-image">
                        IMG
                    </div>
                    <div>
                        <h4>
                            <Link to={`/storefront/${artist.id}`}>{artist.username}</Link>
                        </h4>
                        <span>{artist.location}</span>
                    </div>
                    <p className="artist-bio visible">
                        {artist.bio}
                    </p>
                    < ReleasesIndexContainer />
                </div>
            )
        }
    }
}

export default Sidebar;