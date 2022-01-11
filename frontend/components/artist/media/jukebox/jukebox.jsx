import React from "react";
import { Link } from "react-router-dom";
import { PlayButton, PauseButton, SkipButton, BackButton } from "../../../icons";

const Timer = props => {
    if (!props.times.minutes) {
        return null;
    }
    return (
        <span className="mainTimer">
            <span className="elapsed-timer">{props.times.elapsedMinutes}:{props.times.elapsedSeconds}</span> / <span>{props.times.minutes}:{props.times.seconds}</span>
        </span>
    )
}

class Jukebox extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            toggleButton: PlayButton
        }
        this.togglePlay = this.togglePlay.bind(this);
        this.setMainTimer = this.setMainTimer.bind(this);
        this.updateElapsedTime = this.updateElapsedTime.bind(this);
    }

    componentDidMount(){
        this.currentAudio = document.getElementById('focus-audio');
            }

    // componentDidUpdate(prevProps){
    //     if (prevProps !== this.props) {
    //         this.currentAudio = document.getElementById('focus-audio');
    //         this.setState({elapsed: 0});
    //     }
    // }

    setMainTimer(e){
        const totalSeconds = e.target.duration;
        const durationMinutes = Math.floor(totalSeconds / 60);
        const durationSeconds = Math.floor(60 * ( (totalSeconds/60) - Math.floor(totalSeconds/60) ) );
        this.setState({
            totalDuration: totalSeconds,
            totalElapsed: 0,
            minutes: durationMinutes,
            seconds: durationSeconds, 
            elapsedMinutes: '00',
            elapsedSeconds: '00'
        })
    }

    togglePlay(e){
        const playing = this.currentAudio.dataset.playing || 'false';
        if (playing === 'false') {
            this.currentAudio.play();
            this.currentAudio.setAttribute('data-playing', 'true');
            this.setState({toggleButton: PauseButton});
        } else {
            this.currentAudio.pause();
            this.currentAudio.setAttribute('data-playing', 'false');
            this.setState({toggleButton: PlayButton});
        }
    }

    updateElapsedTime(e){
        const totalSeconds = e.target.currentTime;
        const progressBar = document.querySelector('.seeker-bar.fill');
        const elapsedPercent = Math.floor((this.state.totalElapsed / this.state.totalDuration) * 100); 
        progressBar.setAttribute('style', `width: ${elapsedPercent}%`);
        let newMinutes = String(Math.floor(totalSeconds / 60));
        let newSeconds = String(Math.floor(60 * ( (totalSeconds/60) - Math.floor(totalSeconds/60) ) ));
        if (newMinutes.length < 2) {newMinutes = '0'.concat(newMinutes) };
        if (newSeconds.length < 2) {newSeconds = '0'.concat(newSeconds) };
        this.setState({
            totalElapsed: totalSeconds,
            elapsedMinutes: newMinutes,
            elapsedSeconds: newSeconds
        })
    }

    render(){

        if (this.props.playlistSongs.length === 0) {
            return null;
        }
        let audioContent;
        if (this.props.type === 'focus') {
            audioContent = this.props.playlistSongs[0];
        } else {
            audioContent = this.props.playlistSongs;
        }

        return (
            <div className="juke-box">
                <audio 
                    src={audioContent.audioUrl} 
                    id="focus-audio" 
                    preload="metadata" 
                    onLoadedMetadata={this.setMainTimer} 
                    onTimeUpdate={this.updateElapsedTime}/>
                <div className="focus-player">
                    <div className="play-pause-button" onClick={this.togglePlay}>
                        < this.state.toggleButton />
                    </div>
                    <div className="seeker-box">
                        <div className="track-info">
                            <span>
                                {audioContent.name}
                            </span>
                            < Timer 
                                times={{
                                    elapsedMinutes: this.state.elapsedMinutes,
                                    elapsedSeconds: this.state.elapsedSeconds, 
                                    minutes: this.state.minutes, 
                                    seconds: this.state.seconds}}/> 
                        </div>
                        <div className="track-navigation">
                            <div className="seeker-bar box">
                                    <div className="seeker-bar empty">
                                        <div className="seeker-bar fill">
                                            <div className="seeker-fader">
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="seeker-buttons">
                                < BackButton />
                                < SkipButton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale-info">

                </div>
                <div className="playlist">

                </div>
            </div>
        )
    }
}

export default Jukebox;



// const Jukebox = props => {
//     if (props.playlistSongs.length === 0) {
//         return null;
//     }
//     if (props.type === 'playlist') {
//         return (
//             <ul className="playlist">
//                 {props.playlistSongs.map ((track) => (
//                     <li key={`${track.id}${track.name}`}>
//                         <audio controls src={track.audioUrl}/>
//                         <Link to={`/storefront/${props.artistId}/track/${track.id}`}>
//                             {track.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         )
//     } else {
//         return (
//             <div className="single-track">
//                 <audio controls src={props.song.audioUrl}/>
//             </div>
//         )
//     }
// }

// export default Jukebox;