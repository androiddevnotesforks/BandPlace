import React from "react";
import { Link } from "react-router-dom";
import { PlayButton, PauseButton } from "../../../icons";


class Tracklist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allNodes: null,
            toggleButton: PlayButton
        }
        this.createAudioNodes = this.createAudioNodes.bind(this);
        this.setTrackTime = this.setTrackTime.bind(this);
    }

    componentDidMount(){
        if (this.props.jukeType === 'playlist') {
            this.createAudioNodes();
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.allTracks !== this.props.allTracks) {
            this.createAudioNodes();
        }
    }

    createAudioNodes(){
        const audioDeck = document.getElementById('audio-deck');
        while (audioDeck.firstChild) audioDeck.removeChild(audioDeck.firstChild);
        const nodesArr = []
        this.props.allTracks.forEach(track => {
            const thisTrack = new Audio(track.audioUrl);
            nodesArr.push({
                track: track.track,
                name: track.name,
                trackId: track.id,
                node: thisTrack,
                minutesDuration: null,
                secondsDuration: null
            });
            thisTrack.setAttribute('arrIndex', (nodesArr.length - 1));
            thisTrack.setAttribute('class', `track${track.track}`);
            thisTrack.setAttribute('trackname', track.name);
            thisTrack.addEventListener("loadedmetadata", this.setTrackTime);
            thisTrack.addEventListener("ended", (e) => this.props.changeTrack(e));
            document.getElementById('audio-deck').append(thisTrack);
        });
        this.setState({allNodes: nodesArr});
    }

    setTrackTime(e){
        const totalSeconds = e.target.duration;
        let durationMinutes = String(Math.floor(totalSeconds / 60));
        let durationSeconds = String(Math.floor(60 * ( (totalSeconds/60) - Math.floor(totalSeconds/60) ) ));
        if (durationMinutes.length < 2) {durationMinutes = '0'.concat(durationMinutes) };
        if (durationSeconds.length < 2) {durationSeconds = '0'.concat(durationSeconds) };
        const newNodes = this.state.allNodes;
        if (newNodes[e.target.getAttribute('arrIndex')]) {
            newNodes[e.target.getAttribute('arrIndex')].minutesDuration = durationMinutes; 
            newNodes[e.target.getAttribute('arrIndex')].secondsDuration = durationSeconds;
        } 
        this.setState({
            allNodes: newNodes
        })
    }

    render(){
        if (!this.state.allNodes || this.props.jukeType === 'focus') {
            return null;
        } else if (!this.state.allNodes.every(node => node.minutesDuration)) {
            return null;
        } else {
            return (
                <div className="tracklist box">
                    <ul className="tracklist">
                        {this.state.allNodes.map ((track) => {
                            return(
                            <li key={`${track.track}` + `${track.name}`} className="tracklist-track">
                                <div className={`play-button visible`} onClick={() => this.props.swapAndPlay(track.node, track.name)} id={`play${track.name}`} >
                                    < PlayButton />
                                </div>
                                <div className={`pause-button invisible`} onClick={() => this.props.swapAndPlay(track.node, track.name)} id={`pause${track.name}`}>
                                    < PauseButton />
                                </div>
                                <div className="tracklist track-info not-selected" id={`track-info${track.name}`}>
                                    <span>
                                        {`${track.track}.`}
                                    </span>
                                    < Link to={`/storefront/${this.props.artistId}/track/${track.trackId}`}>
                                        {track.name}
                                    </Link>
                                    <span>
                                        {`${track.minutesDuration}:${track.secondsDuration}`}
                                    </span>
                                </div>
                            </li>
                            )})
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default Tracklist;