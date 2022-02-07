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
        }
        console.log(this.state.name);
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
                    <div className="escape" onClick={() => this.props.removeTrack(this.props.track)}>
                        x
                    </div>
                </div>
                <div className="track-form invisible">
                    <div className="track-title-input">
                        <input type="text"
                            value={this.state.name} 
                            onChange={this.updateField('name')} 
                            placeholder="track name" />
                    </div>
                    <div className="track-info-input">
                        <label>Lyrics:</label>
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