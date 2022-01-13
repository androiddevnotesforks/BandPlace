import React from "react";
import TrackForm from "./track_form";
import AlbumForm from "./album_form";

class EditMedia extends React.Component{
    constructor(props){
        super(props);
        this.defaultState = {
            albumName: 'album name',
            albumTitle: 'Untitled Album', 
            description: '(optional)',
            artistName: '',
            artFile: null,
            tracks: null,
            soundFiles: null
        }
        this.state = this.defaultState;
        this.updateField = this.updateField.bind(this);
        this.updateFiles = this.updateFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setFieldNames(){
    }

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
        if (this.props.albumId === 'new') {
            return (
                < AlbumForm />
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