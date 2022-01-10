import React from "react";
import ReleasesListItem from "./releases_list_item";

class ReleasesIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.releases.length === 0) {
            return (
                <div className="releases-index" style={this.props.linkColor}>
                    <p>You haven't got any releases yet! Time to hop in the studio...</p>
                </div>
            )
        } else {
            return (
                <div className="releases-index" >
                    <ul>
                        {this.props.releases.map ((album, idx) => (
                                < ReleasesListItem albumInfo={album} artistId={album.artist_id} key={idx} linkColor={this.props.linkColor} />
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default ReleasesIndex;