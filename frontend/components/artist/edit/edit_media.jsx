import React from "react";

class EditMedia extends React.Component{
    constructor(props){
        super(props);
        this.defaultState = {
            trackName: 'track name',
            trackTitle: 'Untitled Track', 
            lyrics: '(optional)',
            artistName: '',
            artFile: null,
            soundFile: null
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
                type === 'trackName' ? titleCard = 'Untitled Track' : titleCard = this.state.trackTitle;
                e.target.className = 'default';
                this.setState({
                    [type]: this.defaultState[type],
                    trackTitle: titleCard
                });
            } else if (e.target.className === 'default') {
                e.target.className = 'user-input';
                const customStart = e.target.value.slice(-1);
                type === 'trackName' ? titleCard = customStart : titleCard = this.state.trackTitle;
                this.setState({
                    [type]: customStart,
                    trackTitle: titleCard
                });
            } else {
                type === 'trackName' ? titleCard = e.target.value : titleCard = this.state.trackTitle;
                this.setState({
                    [type]: e.target.value,
                    trackTitle: titleCard
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
        formData.append('song[name]', this.state.trackName);
        formData.append('song[release_id]', 61);
        formData.append('song[track]', 1)
        formData.append('song[lyrics]', this.state.lyrics);
        formData.append('song[track_audio]', this.state.soundFile);
        this.props.createSong(formData);
    }


    render() {
        if (this.props.albumId === 'new' || this.props.trackId === 'new') {
            if (this.props.type === 'album') {
                return (
                    <div className="edit-panel media">
                        <div className="edit-panel left">

                        </div>
                        <div className="edit-panel right">
        
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="edit-panel media">
                        <div className="edit-panel left">
                            <div className="selected-media">
                                <div className="cover-image">

                                </div>
                                <div className="media-info">
                                    <h2 className="default">{this.state.trackTitle}</h2>
                                    <span>by WHOEVER</span>
                                </div>
                            </div>
                            <div className="general-controls">
                                <div className="file-adder">
                                    <div className="audio-input-wrapper">
                                        <input type="file" name="audio" accept="audio/*" onChange={this.updateFiles('soundFile')}/>
                                    </div>
                                    <span>600MB max, filetypes</span>
                                </div>
                                <div className="adder-buttons">
                                    <button onClick={this.handleSubmit}>
                                        Save Draft
                                    </button>
                                    <button>
                                        cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="edit-panel right">
                            <form>
                                <div className="title-wrapper">
                                    *
                                    <input type="text" name="name" value={this.state.trackName} onChange={this.updateField('trackName')} className="default" />
                                    <span className="border-span" />
                                </div>
                                <span> lyrics:</span>
                                <textarea name="lyrics" value={this.state.lyrics} onChange={this.updateField('lyrics')} className="default" />
                                <div className="image-input-wrapper">
                                    <input type="file" name="cover" accept="image/*" onChange={this.updateFiles('artFile')} />
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
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