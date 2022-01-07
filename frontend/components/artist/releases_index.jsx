import React from "react";
import ReleasesListItem from "./releases_list_item";

class ReleasesIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            crateDive: false
        }
    }

    componentDidMount(){
        this.props.fetchReleases();
    }

    componentDidUpdate(){
        if (!this.state.crateDive) {
            this.setState({crateDive: true});
        }
    }

    render(){
        if (!this.state.crateDive) {
            return null;
        } else if (this.props.releases.length === 0) {
            return (
                <div className="releases-index">
                    <p>You haven't got any releases yet! Time to hop in the studio...</p>
                </div>
            )
        } else {
            return (
                <div className="releases-index">
                    <ul onClick={this.goToAlbum} >
                        {this.props.releases.map ((album, idx) => (
                            < ReleasesListItem albumInfo={album} key={idx} />
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default ReleasesIndex;