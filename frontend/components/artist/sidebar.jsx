import React from "react";
import ReleasesIndexContainer from "./releases_index_container";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if (!this.props.artistInfo) {
            return null;
        }
        if (this.props.isMainPage) {
            return (
                <div className="sidebar">
                    <div className="artist-image">
                        IMG
                    </div>
                    <div>
                        <h4>
                            {this.props.artistInfo.username}
                        </h4>
                        <span>{this.props.artistInfo.location}</span>
                    </div>
                    <p className="artist-bio">
                        {this.props.artistInfo.bio}
                    </p>
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
                            <Link to={`/storefront/${this.props.artistInfo.id}`}>{this.props.artistInfo.username}</Link>
                        </h4>
                        <span>{this.props.artistInfo.location}</span>
                    </div>
                    <p className="artist-bio">
                        {this.props.artistInfo.bio}
                    </p>
                    < ReleasesIndexContainer />
                </div>
            )
        }
    }
}

export default Sidebar;