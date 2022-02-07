import React from "react";

class TrackForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.track.name,
            trackNum: props.track.track,
            lyrics: props.track.lyrics,
            releaseId: props.track.release_id
        }
        this.selectTrack = this.selectTrack.bind(this);
        this.updateTrackInfo = this.updateTrackInfo.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.createDeletionModal = this.createDeletionModal.bind(this);
        this.destroyDeletionModal = this.destroyDeletionModal.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props) {
            this.setState({
                name: this.props.track.name,
                trackNum: this.props.track.track,
                lyrics: this.props.track.lyrics,
                releaseId: this.props.track.release_id
            })
        }
    }

    selectTrack(e){
        if (e.target.className !== 'escape') {
            document.getElementById('editor-screen-right').className = 'visible';
            document.querySelector('.selected-media').classList.add('not-selected');
            Array.from(document.querySelector('.album-form').children)
                .forEach (el => el.classList.add('invisible'));
            document.querySelectorAll('.track-edit').forEach (track => track.className = 'track-edit not-selected');
            document.querySelectorAll('.track-form').forEach (track => track.className = 'track-form invisible');
            e.currentTarget.className = 'track-edit selected';
            e.currentTarget.children[1].className = 'track-form visible';
            e.currentTarget.nextElementSibling.className = 'track-edit subselected';
        }
        // console.log(this.state.name);
    }

    updateTrackInfo(e){
        e.preventDefault();
        this.props.track.name = this.state.name;
        this.props.track.lyrics = this.state.lyrics;
        document.getElementById(`save-track${this.state.trackNum}`).disabled = true;
    }

    updateField(type){
        return e => (
            this.setState({
                [type]: e.target.value
            }, () => {
                if (this.state.name !== this.props.track.name || this.state.lyrics !== this.props.track.lyrics) {
                    const saveButton = document.getElementById(`save-track${this.state.trackNum}`);
                    saveButton.disabled = false;
                    saveButton.addEventListener("click", this.updateTrackInfo);
                }
            })
        )
    }

    removeTrack(){
        if (this.props.albumId === 'new') {     
            this.props.removeTrack(this.props.track);
            this.destroyDeletionModal();
        } else {
            const track = Object.assign({}, this.props.track);
            this.props.removeTrack(this.props.track);
            this.props.deleteSong(track.id);
            this.destroyDeletionModal();
        }
    }

    createDeletionModal(){
        const body = document.querySelector('body');
        const background = document.createElement('div');
        const modal = document.createElement('div');
        const topText = document.createElement('span');
        const pText = document.createElement('p');
        const buttonsBox = document.createElement('div');
        const deleteButton = document.createElement('button');
        const cancel = document.createElement('button');
        buttonsBox.className = 'buttons-holder';
        background.className = 'modal-background';
        background.setAttribute('id', 'modal-background');
        modal.className = 'modal-child deletor-box';
        modal.setAttribute('id', 'modal-main');
        topText.innerHTML = "Are you sure you want to delete this song from the album?";
        pText.innerHTML = "This cannot be undone (clicking 'cancel' on the main form will not bring this song back)";
        deleteButton.innerText = "Delete song";
        cancel.innerText = "cancel";
        deleteButton.addEventListener("click", this.removeTrack);
        cancel.addEventListener("click", this.destroyDeletionModal);
        body.append(background);
        background.append(modal);
        modal.append(topText);
        modal.append(pText);
        modal.append(buttonsBox);
        buttonsBox.append(deleteButton);
        buttonsBox.append(cancel);
    }

    destroyDeletionModal(){
        const background = document.getElementById('modal-background');
        const modal = document.getElementById('modal-main');
        const buttonsBox = document.querySelector('.buttons-holder');
        Array.from(buttonsBox.children).forEach (child => child.remove());
        Array.from(modal.children).forEach (child => child.remove());
        background.remove();
    }


    render(){
        return (
            <li className="track-edit not-selected" id={`${this.state.name}-${this.state.trackNum}`} onClick={this.selectTrack}>
                <div className="track-info">
                    <div className="track-num">
                        {this.state.trackNum}
                    </div>
                    <div className="track-title">
                        {this.state.name}
                    </div>
                    <div className="escape" onClick={this.createDeletionModal}>
                        x
                    </div>
                    {/* <div className="list-border"/> */}
                </div>
                <div className="track-form invisible">
                    <div className="track-title-input">
                        <input type="text"
                            value={this.state.name} 
                            onChange={this.updateField('name')} 
                            placeholder="track name" />
                            <span className="border-span" />
                    </div>
                    <div className="track-info-input">
                        <span className="label">lyrics:</span>
                        <textarea
                            value={this.state.lyrics} 
                            onChange={this.updateField('lyrics')} 
                            placeholder="(optional)" />
                    </div>
                    <button id={`save-track${this.state.trackNum}`} disabled >Save Changes</button>
                </div>
            </li>
        )
    }
}

export default TrackForm;