import React from "react";
import { Link } from "react-router-dom";

class ReleasesListItem extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <li className="album-tile">
                <Link to={`/storefront/${this.props.artistId}/album/${this.props.albumInfo.id}`} >
                    <img src={this.props.albumInfo.coverArtUrl} />
                    <span style={this.props.linkColor}>
                        {this.props.albumInfo.title}
                    </span>
                </Link>
            </li>
        )
    }
};

export default ReleasesListItem;

// OLD LINK INFO
