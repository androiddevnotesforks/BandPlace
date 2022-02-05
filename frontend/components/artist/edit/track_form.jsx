import React from "react";

class TrackForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.track.name,
            trackNum: props.track.track
        }
        this.selectTrack = this.selectTrack.bind(this);
    }

    selectTrack(e){
        document.getElementById('editor-screen-right').className = 'visible';
        Array.from(document.querySelector('.album-form').children)
            .forEach (el => el.classList.add('invisible'));
        document.querySelectorAll('.track-edit').forEach (track => track.className = 'track-edit not-selected');
        document.querySelectorAll('.track-form').forEach (track => track.className = 'track-form invisible');
        e.currentTarget.className = 'track-edit selected';
        e.currentTarget.children[1].className = 'track-form visible';
    }

    render(){
        return (
            <li className="track-edit not-selected" id={`${this.state.name}-${this.state.trackNum}`} onClick={this.selectTrack}>
                <div className="track-info">
                    {this.state.name}
                </div>
                <div className="track-form invisible">
                </div>
            </li>
        )
    }
}

export default TrackForm;