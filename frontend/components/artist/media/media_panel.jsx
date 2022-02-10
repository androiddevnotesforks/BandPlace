import React from "react";
import { Link } from "react-router-dom";
import Jukebox from "./jukebox/jukebox";


class MediaPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            artistId: props.artistId,
            albumId: props.albumId,
            trackId: props.trackId,
            textColor: props.colorProfile.primaryText,
            linkColor: props.colorProfile.link,
            secondaryColor: props.colorProfile.secondaryText,
            playlisted: 'false'
        }
    }

    componentDidMount(){
        if (this.props.pageType === 'song') {
            this.props.fetchSong();
        } else {
            this.props.fetchReleaseSongs().then(() => this.setState({playlisted: 'true'}));
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.pageType === 'album' && (this.props.albumId !== prevProps.albumId || prevProps.pageType === 'song')) {
            this.props.fetchReleaseSongs().then(() => this.setState({playlisted: 'true'}));
        }
        if (this.props.pageType === 'song' && (this.props.trackId !== prevProps.trackId)) {
            this.props.fetchSong().then(() => this.setState({playlisted: 'false'}));
        }
        if (this.props.colorProfile !== prevProps.colorProfile){
            this.setState({
                textColor: {'color': this.props.colorProfile.primaryText.color},
                linkColor: {'color': this.props.colorProfile.link.color},
                secondaryColor: {'color': this.props.colorProfile.secondaryText.color}
            })
        }
        if (prevProps.isOwner !== this.props.isOwner && !this.props.isOwner) {
            document.getElementById('owner-buttons').className = 'invisible';
        }
    }

    createEditButtons(){
        if (this.props.isOwner === true) {
            return (
                <div className="visible" id="owner-buttons">
                    <Link to={`/edit/album/${this.state.albumId}`}>Edit</Link>
                    <div onClick={this.props.openModal}>Delete</div>
                </div>
            )
        } else {
            return (
                <div className="invisible" id="owner-buttons">
                    {/* <Link to={`/edit/album/${this.state.albumId}`}>Edit</Link>
                    <div>Delete</div> */}
                </div>
            )
        }
    }
    
    render(){
        if ((!this.props.albumInfo || !this.props.albumArtist) && !this.props.songInfo) {
            return null;
        } else {
            if (this.props.pageType === 'album') {
                if (this.state.playlisted === 'false') return null;
                this.mediaName = this.props.albumInfo.title;
                this.artistName = this.props.albumArtist.username;
                this.mediaText = this.props.albumInfo.description;
                this.jukeType = 'playlist';
                this.mediaArt = this.props.albumInfo.coverArtUrl;
            } else if (!this.props.songInfo) {
                return null;
            } else {
                this.mediaName = this.props.songInfo.name;
                this.artistName = this.props.albumArtist.username;
                this.mediaText = this.props.songInfo.lyrics;
                this.jukeType = 'focus';
                this.mediaArt = this.props.songInfo.albumArtUrl;
            }
            return (
                <div className="media-panel" style={this.state.textColor}>
                    <div className="media-info left">
                        <div className="media-info title">
                            <h2>{this.mediaName}</h2>
                            <span>by </span><Link className="link-text" to={`/storefront/${this.props.albumArtist.id}`} style={this.state.linkColor}>{this.props.albumArtist.username}</Link> 
                            {this.createEditButtons()}
                        </div>
                        <div className="jukebox">
                            < Jukebox 
                                type={this.jukeType} 
                                artistId={this.props.artistId} 
                                trackId={this.props.trackId}
                                style={this.state.linkColor} 
                                playlistSongs={this.props.trackList}
                                />
                        </div>
                        <div className="media-info description">
                            <p>{this.mediaText}</p>
                        </div>
                        {/* <div className="media-info tags">
                            <h4>Tags (coming soon)</h4>
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
                        </div> */}
                    </div>
                    <div className="media-info right">
                        <div className="media-cover">
                            <img src={this.mediaArt} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MediaPanel;