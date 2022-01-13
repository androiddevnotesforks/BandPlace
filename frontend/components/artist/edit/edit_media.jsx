import React from "react";
import TrackForm from "./track_form";
import AlbumForm from "./album_form";
import { fetchRelease } from "../../../actions/release_actions";

class EditMedia extends React.Component{
    constructor(props){
        super(props);
        this.defaultState = {
            albumName: 'album name',
            albumTitle: 'Untitled Album', 
            description: '(optional)',
            artFile: null,
            tracks: null,
            soundFiles: null,
            tabSelector: 0
        }
        this.state = this.defaultState;
        this.updateField = this.updateField.bind(this);
        this.updateFiles = this.updateFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){
    //     if (this.props.albumId !== 'new') {
    //         this.props.fetchRelease().then(() => this.setState({
    //             albumName: this.props.album.title,
    //             albumTitle: this.props.album.title,
    //             description: this.props.album.description
    //         }));
    //         this.props.fetchReleaseSongs();
    //     }
    // }

    // componentDidUpdate(prevProps){
        // if (prevProps.albumTracks !== this.props.albumTracks && this.props.album) {
        //     this.setState({
        //         tracks: this.props.albumTracks,
        //         albumName: this.props.album.title,
        //         albumTitle: this.props.album.title,
        //         description: this.props.album.description
        //     })
        // }
    // }

    updateField(type){
        let titleCard;
        return e => {
            if (e.target.value === '') {
                type === 'albumName' ? titleCard = 'Untitled Track' : titleCard = this.state.albumTitle;
                e.target.className = 'default';
                this.setState({
                    [type]: this.defaultState[type],
                    albumTitle: titleCard
                });
            } else if (e.target.className === 'default') {
                e.target.className = 'user-input';
                const currentEntryArr = e.target.value.split('');
                const origArr = this.defaultState[type].split('');
                const customStart = currentEntryArr.filter(char => origArr.indexOf(char) === -1);
                type === 'albumName' ? titleCard = customStart : titleCard = this.state.albumTitle;
                this.setState({
                    [type]: customStart,
                    albumTitle: titleCard
                });
            } else {
                type === 'albumName' ? titleCard = e.target.value : titleCard = this.state.albumTitle;
                this.setState({
                    [type]: e.target.value,
                    albumTitle: titleCard
                })
            }
        }
    }

    populateTracks(){
        if (!this.state.tracks) {
            return null;
        } else {
            return (
                <ul>
                    {this.state.tracks.map ((track, idx) => {
                        return (
                            <li key={idx} className="edit-track-display">
                                {track.name}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    updateFiles(type){
        return e => {
            this.setState({
                [type]: e.target.files[0]
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('release[name]', this.state.albumName);
        // formData.append('release[artist_id]', );
        formData.append('release[description]', this.state.description);
        formData.append('release[cover_image]', this.state.artFile);
        this.props.createRelease(formData);
    }


    render() {
        // debugger
        if (this.props.albumId === 'new') {
            return (
                <div className="edit-panel media">
                    <div className="edit-panel left">
                        <div className="selected-media">
                            <div className="cover-image">
                            </div>
                            <div className="media-info">
                                <h2 className="default">{this.state.albumTitle}</h2>
                                <span>by {this.props.artist.username}</span>
                            </div>
                        </div>
                        <div className="general-controls">
                            <ul>
                                {this.populateTracks()}
                            </ul>
                            <div className="file-adder">
                                    <div className="audio-input-wrapper">
                                        {/* ADD TRACK */}
                                        <input type="file" name="audio" accept="audio/*" onChange={this.updateFiles('soundFile')}/>
                                    </div>
                                    <span>600MB max, filetypes</span>
                                </div>
                                <div className="adder-buttons">
                                    <button onClick={this.handleSubmit}>
                                        Save
                                    </button>
                                    <button>
                                        cancel
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="edit-panel right">
                        <form>
                            <TrackForm />
                            <AlbumForm />
                            <div className="title-wrapper">
                                *
                                <input type="text" name="name" value={this.state.albumName} onChange={this.updateField('albumName')} className="default" />
                                <span className="border-span" />
                            </div>
                            <span> description:</span>
                            <textarea name="description" value={this.state.description} onChange={this.updateField('description')} className="default" />
                            <div className="image-input-wrapper">
                                <input type="file" name="cover" accept="image/*" onChange={this.updateFiles('artFile')} />
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="edit-panel media">
                    <div className="edit-panel left">
    
                    </div>
                    <div className="edit-panel right">
    
                    </div>
                </div>
            )
        }
    }
}

export default EditMedia;