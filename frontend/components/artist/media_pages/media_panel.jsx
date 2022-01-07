import React from "react";
import { Link } from "react-router-dom";

class MediaPanel extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if (this.props.pageType === 'song') {
            this.props.fetchSong();
        }
    }

    render(){
        if ((!this.props.albumInfo || !this.props.albumArtist) && !this.props.songInfo) {
            return null;
        } else {
            if (this.props.pageType === 'album') {
                this.mediaName = this.props.albumInfo.title;
                this.artistName = this.props.albumArtist.username;
                this.mediaText = this.props.albumInfo.description;
            } else if (!this.props.songInfo) {
                return null;
            } else {
                this.mediaName = this.props.songInfo.name;
                this.artistName = this.props.albumArtist.username;
                this.mediaText = this.props.songInfo.lyrics;
            }
            return (
                <div className="media-panel">
                    <div className="media-info left">
                        <div className="media-info title">
                            <h2>{this.mediaName}</h2>
                            <span> by {this.artistName} </span> 
                        </div>
                        <div className="jukebox">

                        </div>
                        <div className="media-info description">
                            <p>{this.mediaText}</p>
                        </div>
                        <div className="media-info tags">
                            <h4>Tags</h4>
                            <ul>
                                <li>
                                    genre
                                </li> 
                                <li>
                                    subgenre
                                </li> 
                                <li>
                                    other genre
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div className="media-info right">
                        <div className="media-cover">
                            ALBUM COVER
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MediaPanel;