import React from "react";
import { Link } from "react-router-dom";
import JukeboxContainer from "./jukebox/jukebox_container";

class MediaPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            artistId: props.artistId,
            albumId: props.albumId,
            trackId: props.trackId,
            textColor: props.colorProfile.primaryText,
            linkColor: props.colorProfile.link,
            secondaryColor: props.colorProfile.secondaryText
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
        if (this.props.colorProfile !== prevProps.colorProfile){
            this.setState({
                textColor: {'color': this.props.colorProfile.primaryText.color},
                linkColor: {'color': this.props.colorProfile.link.color},
                secondaryColor: {'color': this.props.colorProfile.secondaryText.color}
            })
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
                this.song = null;
            } else if (!this.props.songInfo) {
                return null;
            } else {
                this.mediaName = this.props.songInfo.name;
                this.artistName = this.props.albumArtist.username;
                this.mediaText = this.props.songInfo.lyrics;
                this.jukeType = 'focus';
                this.song = this.props.songInfo;
            }

            return (
                <div className="media-panel" style={this.state.textColor}>
                    <div className="media-info left">
                        <div className="media-info title">
                            <h2>{this.mediaName}</h2>
                            <span>by </span><Link className="link-text" to={`/storefront/${this.props.albumArtist.id}`} style={this.state.linkColor}>{this.props.albumArtist.username}</Link> 
                        </div>
                        <div className="jukebox">
                            < JukeboxContainer type={this.jukeType} artistId={this.props.artistId} song={this.song}/>
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