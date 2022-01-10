import React from "react";
import { Link } from "react-router-dom";

class ReleasesListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li>
                <Link to={`/storefront/${this.props.artistId}/album/${this.props.albumInfo.id}`} style={this.props.linkColor}>
                    {this.props.albumInfo.title}
                </Link>
            </li>
        )
    }
};

export default ReleasesListItem;