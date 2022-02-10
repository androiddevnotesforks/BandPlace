import React from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import TrackForm from "./track_form";
import AlbumForm from "./album_form";

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
        this.resetImage = this.resetImage.bind(this);
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
        const artBox = document.querySelector('.image-input-wrapper');
        // debugger
        artBox.removeAttribute('style');
        artBox.style.backgroundImage = this.getArtUrl();
        artBox.style.backgroundSize = 'cover';
        document.getElementById('album-form-border').removeAttribute('style');
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

    addTrack(e){
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
                            <TrackForm track={track} key={idx} 
                                removeTrack={this.removeTrack} 
                                albumId={this.props.albumId}
                                deleteSong={this.props.deleteSong}
                                />
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
            const uploadImageBox = document.querySelector('.image-input-wrapper');
            uploadImageBox.classList.remove('empty');
            Array.from(uploadImageBox.children).forEach (el => {
                if (!Array.from(el.classList).includes('invisible')) el.classList.add('invisible');
            });
            document.querySelector('.remove-image').classList.remove('invisible');

            return `url(${this.state.artUrl})`;
        } else {
            return 'none';
        }
    }

    resetImage(){
        document.querySelector('.cover-image').classList.add('empty');
        const uploadImageBox = document.querySelector('.image-input-wrapper');
        uploadImageBox.classList.add('empty');
        Array.from(uploadImageBox.children).forEach (el => {
            if (Array.from(el.classList).includes('invisible')) el.classList.remove('invisible');
        });
        document.querySelector('.remove-image').classList.add('invisible');
        this.setState({
            artFile: null,
            artUrl: null
        })
    }

    handleSubmit(e){
        e.preventDefault();

        // ADD VALIDITY CHECK w/ERRORS
        
        const albumData = new FormData();
        albumData.append('release[title]', this.state.albumName);
        albumData.append('release[description]', this.state.description);
        if (this.state.artFile) {
            albumData.append('release[cover_image]', this.state.artFile);
        } else {
            albumData.append('release[cover_image]', this.state.artUrl);
        }
        if (this.props.albumId === 'new') {
            albumData.append('release[artist_id]', this.props.artist.id);
            this.props.createRelease(albumData).then(res => {
                const release_id = res.release.id;
                this.state.tracks.forEach ((track, idx) => {
                    const trackData = new FormData();
                    trackData.append('song[name]', track.name);
                    trackData.append('song[track]', track.track);
                    trackData.append('song[release_id]', release_id);
                    trackData.append('song[lyrics]', track.lyrics);
                    trackData.append('song[track_audio]', this.state.soundFiles[idx]);
                    this.props.createSong(trackData);
                })
            }).then(() => this.props.goToStorefront());
            // debugger
        } else {
            this.props.updateRelease(albumData);
            this.state.tracks.forEach ((track, idx) => {
                const trackData = new FormData();
                trackData.append('song[name]', track.name);
                trackData.append('song[lyrics]', track.lyrics);
                if (typeof this.state.soundFiles[idx] !== 'string') {
                    trackData.append('song[track]', track.track);
                    trackData.append('song[release_id]', parseInt(this.props.albumId));
                    trackData.append('song[track_audio]', this.state.soundFiles[idx]);
                    this.props.createSong(trackData);
                } else {
                    this.props.updateSong(track.id, trackData);
                }
            });
            this.props.goToStorefront();
        }
    }


    render() {
        let pageSubmit;
        this.props.albumId === 'new' ? pageSubmit = 'Save' : pageSubmit = 'Update';
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
                        <h3>TRACKS</h3>
                            {this.populateTracks()}
                        <div className="file-adder">
                                <div className="audio-input-wrapper">
                                    <label for="audio-input">add track</label>
                                    <input type="file" name="audio" accept="audio/*" onChange={this.addTrack} id="audio-input"/>
                                    <span>.mp3, .wav, .aif or .flac</span>
                                </div>
                            </div>
                            <div className="adder-buttons">
                                <button onClick={this.handleSubmit}>
                                    {pageSubmit}
                                </button>
                                <span onClick={this.props.goToStorefront}>
                                    cancel
                                </span>
                            </div>
                    </div>
                </div>
                <div className="edit-panel right">
                    <div id="editor-screen-right" className="invisible"/>
                    <form className="album-form visible">
                        <div className="title-wrapper">
                            <input type="text" name="name" value={this.state.albumName} 
                            onChange={this.updateField('albumName')} 
                            placeholder="album name" />
                            <span className="border-span" />
                        </div>
                        <span> about this album:</span>
                        <textarea name="description" value={this.state.description} 
                        onChange={this.updateField('description')} 
                        placeholder="(optional)" />
                        <span className="border-span" id="album-form-border"/>
                        <div className="image-input-wrapper empty" style={{backgroundImage: `${this.getArtUrl()}`, backgroundSize: 'cover'}}>
                            <label for="image-input">Upload Album Art</label>
                            <input type="file" name="cover" accept="image/*" onChange={this.updateArt} id="image-input"/>
                            <span>(bigger is better)</span>
                            <span>.jpg or .png</span>
                            <div className="remove-image invisible" onClick={this.resetImage}>X</div>
                        </div>
                    </form>
                </div>
            </div>
        )
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