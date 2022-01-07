import React from "react";
import JukeboxContainer from "./jukebox/jukebox_container";

class MediaPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            artistId: props.artistId,
            albumId: props.albumId,
            trackId: props.trackId
        }
    }

    componentDidMount(){
        if (this.props.pageType === 'song') {
            this.props.fetchSong();
        } else {
            this.props.fetchReleaseSongs();
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.pageType === 'album' && (this.props.albumId !== prevProps.albumId)) {
            this.props.fetchReleaseSongs();
        }
        if (this.props.pageType === 'song' && (this.props.trackId !== prevProps.trackId)) {
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
                this.jukeType = 'playlist';
            } else if (!this.props.songInfo) {
                return null;
            } else {
                this.mediaName = this.props.songInfo.name;
                this.artistName = this.props.albumArtist.username;
                this.mediaText = this.props.songInfo.lyrics;
                this.jukeType = 'focus';

            }
            return (
                <div className="media-panel">
                    <div className="media-info left">
                        <div className="media-info title">
                            <h2>{this.mediaName}</h2>
                            <span> by {this.artistName} </span> 
                        </div>
                        <div className="jukebox">
                            < JukeboxContainer type={this.jukeType} artistId={this.props.artistId} />
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