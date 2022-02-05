import React from "react";
import TrackForm from "./track_form";
import AlbumForm from "./album_form";
import { fetchRelease } from "../../../actions/release_actions";

class EditMedia extends React.Component{
    constructor(props){
        super(props);
        this.defaultState = {
            albumName: '',
            albumTitle: 'Untitled Album', 
            description: '',
            artFile: null,
            tracks: [],
            soundFiles: [],
            deleteQueue: [],
            activeTrack: props.activeTrack
        }
        this.state = this.defaultState;
        this.updateField = this.updateField.bind(this);
        this.updateArt = this.updateArt.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectRelease = this.selectRelease.bind(this);
    }

    componentDidMount(){
        const that = this;
        if (this.props.albumId !== 'new') {
            this.props.fetchRelease()
                .then(res => {
                    that.setState({
                    albumName: res.release.title,
                    albumTitle: res.release.title,
                    description: (res.release.description || ''),
                    artFile: null,
                    artUrl: res.release.coverArtUrl
                });
            }).then(() => {
                that.props.fetchReleaseSongs().then(res => {
                    that.setState({
                        tracks: Object.values(res.songs),
                        soundFiles: (Object.values(res.songs).map (song => song.name))
                    });
                });
            });
        }
    }

    selectRelease(){
        document.getElementById('editor-screen-right').className = 'invisible';
        document.querySelector('.selected-media').classList.remove('not-selected');
        Array.from(document.querySelector('.album-form').children)
            .forEach (el => el.classList.remove('invisible'));
        document.querySelectorAll('.track-edit').forEach (track => track.className = 'track-edit not-selected');
        document.querySelectorAll('.track-form').forEach (track => track.className = 'track-form invisible');
    }

    updateField(type){
        return e => {
            let titleCard; 
            if (type === 'albumName') {
                e.target.value === '' ? titleCard = 'Untitled Album' : titleCard = e.target.value;
                this.setState({albumName: e.target.value, albumTitle: titleCard});
            } else {
                this.setState({description: e.target.value});
            }
        }
    }
// NEXT: ADD TRACK LOGIC
    addTrack(e){
        // debugger
        const audioFile = e.target.files[0];
        const newTracks = this.state.tracks.slice();
        const newSoundFiles = this.state.soundFiles.slice(); 
        const releaseId = this.props.albumId;
        const thisTrack = {
            name: audioFile.name,
            lyrics: '',
            release_id: releaseId,
            track: (this.state.tracks.length + 1)
        }
        newTracks.push(thisTrack);
        newSoundFiles.push(audioFile);
        this.setState({
            tracks: newTracks,
            soundFiles: newSoundFiles
        });
    }

    removeTrack(track){
        const trackIdx = track.track - 1;
        const newTracks = this.state.tracks.slice(0, trackIdx).concat(this.state.tracks.slice(track.track));
        if (newTracks.length === 0) this.selectRelease();
        newTracks.forEach (track => track.track = (newTracks.indexOf(track) + 1));
        const newSoundFiles = this.state.soundFiles.slice(0, trackIdx).concat(this.state.soundFiles.slice(track.track));
        this.setState({
            tracks: newTracks,
            soundFiles: newSoundFiles
        });
    }

    populateTracks(){
        if (this.state.tracks.length === 0) {
            return null;
        } else {
            return (
                <ul>
                    {this.state.tracks.map ((track, idx) => {
                        return (
                            <TrackForm track={track} key={idx} removeTrack={this.removeTrack}/>
                        )
                    })}
                </ul>
            )
        }
    }

    updateArt(e){
        const artFile = e.target.files[0]; 
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({artFile, artUrl: fileReader.result});
        }
        if (artFile) fileReader.readAsDataURL(artFile);
    }

    getArtUrl(){
        if (this.state.artUrl) {
            document.querySelector('.cover-image').classList.remove('empty');
            return `url(${this.state.artUrl})`;
        } else {
            return 'none';
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const albumData = new albumData();
        albumData.append('release[title]', this.state.albumName);
        albumData.append('release[artist_id]', this.props.artist.id);
        albumData.append('release[description]', this.state.description);
        if (this.state.artFile) albumData.append('release[cover_image]', this.state.artFile);
        this.props.createRelease(albumData).then(() => console.log('album created'));
    }


    render() {
            return (
                <div className="edit-panel media">
                    <div className="edit-panel left">
                        <div className="selected-media" onClick={this.selectRelease}>
                            <div className="cover-image empty" style={{backgroundImage: `${this.getArtUrl()}`, backgroundSize: 'cover'}} >
                            </div>
                            <div className="media-info">
                                <h2 className="default">{this.state.albumTitle}</h2>
                                <span>by {this.props.artist.username}</span>
                            </div>
                        </div>
                        <div className="general-controls">
                                {this.populateTracks()}
                            <div className="file-adder">
                                    <div className="audio-input-wrapper">
                                        <h3>Add Track:</h3>
                                        <input type="file" name="audio" accept="audio/*" onChange={this.addTrack}/>
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
                        <div id="editor-screen-right" className="invisible"/>
                        <form className="album-form visible">
                            <div className="title-wrapper">
                                *
                                <input type="text" name="name" value={this.state.albumName} 
                                onChange={this.updateField('albumName')} 
                                placeholder="album name" />
                                <span className="border-span" />
                            </div>
                            <span> description:</span>
                            <textarea name="description" value={this.state.description} 
                            onChange={this.updateField('description')} 
                            placeholder="(optional)" />
                            <div className="image-input-wrapper">
                                <input type="file" name="cover" accept="image/*" onChange={this.updateArt} />
                            </div>
                        </form>
                    </div>
                </div>
            )
        // } else {
        //     debugger
        //     return (
        //         <div className="edit-panel media">
        //             <div className="edit-panel left">
    
        //             </div>
        //             <div className="edit-panel right">
    
        //             </div>
        //         </div>
        //     )
        // }
    }
}

export default EditMedia;


        // debugger
        // let titleCard;
        // return e => {
        //     if (e.target.value === '') {
        //         type === 'albumName' ? titleCard = 'Untitled Track' : titleCard = this.state.albumTitle;
        //         e.target.className = 'default';
        //         this.setState({
        //             [type]: this.defaultState[type],
        //             albumTitle: titleCard
        //         });
        //     } else if (e.target.className === 'default') {
        //         e.target.className = 'user-input';
        //         const currentEntryArr = e.target.value.split('');
        //         const origArr = this.defaultState[type].split('');
        //         const customStart = currentEntryArr.filter(char => origArr.indexOf(char) === -1);
        //         type === 'albumName' ? titleCard = customStart : titleCard = this.state.albumTitle;
        //         this.setState({
        //             [type]: customStart,
        //             albumTitle: titleCard
        //         });
        //     } else {
        //         type === 'albumName' ? titleCard = e.target.value : titleCard = this.state.albumTitle;
        //         this.setState({
        //             [type]: e.target.value,
        //             albumTitle: titleCard
        //         })
        //     }
        // }