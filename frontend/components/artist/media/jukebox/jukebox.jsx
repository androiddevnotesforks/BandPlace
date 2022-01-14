import React from "react";
// import { Link } from "react-router-dom";
import { PlayButton, PauseButton, SkipButton, BackButton } from "../../../icons";
import Tracklist from "./tracklist";


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
            toggleButton: PlayButton,
            nowPlaying: 'false',
            currentTrack: 1
        }
        this.togglePlay = this.togglePlay.bind(this);
        this.setMainTimer = this.setMainTimer.bind(this);
        this.updateElapsedTime = this.updateElapsedTime.bind(this);
        this.beginSeeking = this.beginSeeking.bind(this);
        this.seekUpdate = this.seekUpdate.bind(this);
        this.endSeeking = this.endSeeking.bind(this);
        this.changeTrack = this.changeTrack.bind(this);
        this.swapAndPlay = this.swapAndPlay.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.playlistSongs !== this.props.playlistSongs) {
            if (this.state.nowPlaying === 'true') {
                this.togglePlay();
            }
            this.setState({
                toggleButton: PlayButton,
                elapsedMinutes: '00', 
                elapsedSeconds: '00'
            });
        }
    }

    setMainTimer(e){
        // debugger
        const totalSeconds = e.target.duration;
        let durationMinutes = String(Math.floor(totalSeconds / 60));
        let durationSeconds = String(Math.floor(60 * ( (totalSeconds/60) - Math.floor(totalSeconds/60) ) ));
        if (durationMinutes.length < 2) {durationMinutes = '0'.concat(durationMinutes) };
        if (durationSeconds.length < 2) {durationSeconds = '0'.concat(durationSeconds) };
        this.setState({
            totalDuration: totalSeconds,
            totalElapsed: 0,
            minutes: durationMinutes,
            seconds: durationSeconds, 
            elapsedMinutes: '00',
            elapsedSeconds: '00'
        })
    }

    togglePlay(trackName){
        this.currentAudio = document.getElementById('focus-audio');
        const playing = this.currentAudio.dataset.playing || 'false';
        if (playing === 'false') {
            this.currentAudio.play();
            this.currentAudio.setAttribute('data-playing', 'true');
            this.setState({
                toggleButton: PauseButton,
                nowPlaying: 'true',
                currentTrack: parseInt(this.currentAudio.className.slice(5))
            });
        } else {
            this.currentAudio.pause();
            this.currentAudio.setAttribute('data-playing', 'false');
            this.setState({
                toggleButton: PlayButton,
                nowPlaying: 'false'
            });
        }
        this.toggleNowPlaying(trackName = this.currentAudio.getAttribute('trackname'), this.currentAudio);
    }

    toggleNowPlaying(trackName, audioNode){
        document.querySelectorAll('.pause-button').forEach (el => el.setAttribute('class', 'pause-button invisible'));
        document.querySelectorAll('.play-button').forEach (el => el.setAttribute('class', 'play-button visible'));
        document.querySelectorAll('.tracklist.track-info').forEach (el => el.setAttribute('class', 'tracklist track-info unselected'));
        const thisPlay = document.getElementById(`play${trackName}`);
        const thisPause = document.getElementById(`pause${trackName}`);
        const thisInfo = document.getElementById(`track-info${trackName}`)
        if (audioNode.dataset.playing === 'true') {
            thisPlay.setAttribute('class', 'play-button invisible');
            thisPause.setAttribute('class', `pause-button visible`);
            thisInfo.setAttribute('class', 'tracklist track-info selected');
        } else {
            thisPlay.setAttribute('class', 'play-button visible');
            thisPause.setAttribute('class', 'pause-button invisible');
        }
    }

    swapAndPlay(audioNode, trackName){

            const waitingContainer = document.getElementById('audio-deck');
            const activeContainer = document.getElementById('audio-holder');
            const oldMain = document.getElementById('focus-audio');

            if (oldMain && oldMain !== audioNode) {
                oldMain.pause();
                oldMain.currentTime = 0; 
                oldMain.setAttribute('id', 'on-deck');
                waitingContainer.append(oldMain);
                activeContainer.append(audioNode);
                audioNode.setAttribute('id', 'focus-audio');
                audioNode.setAttribute('preload', 'auto');
                audioNode.setAttribute('data-playing', 'false'); 
                audioNode.addEventListener('play', (e) => this.setMainTimer(e));
                audioNode.addEventListener('timeupdate', this.updateElapsedTime);
                document.getElementById('track-title').innerText = trackName;
            };
            this.togglePlay(trackName); 
    }

    changeTrack(e){
            let request;
            e.currentTarget.tagName === 'AUDIO' ? request = 'next-button' : request = e.currentTarget.className.split(' ')[0];
            const prevTrack = document.querySelector(`.track${this.state.currentTrack - 1}`);
            // debugger
            if (!prevTrack && request !== 'next-button') {
                return null;
            }
            let prevName;
            if (prevTrack) {
                prevName = prevTrack.getAttribute('trackname')
            };
            const nextTrack = document.querySelector(`.track${this.state.currentTrack + 1}`) || document.querySelector(`.track1`) ;
            const nextName = nextTrack.getAttribute('trackname');
            let node, name;
            if (request === 'next-button') {
                [node, name] = [nextTrack, nextName]; 
            } else {
                [node, name] = [prevTrack, prevName]; 
            }  
                
            this.swapAndPlay(node, name);
    }

    updateElapsedTime(e){
        e.preventDefault();
        if (this.currentAudio.dataset.seeking !== 'true') {
            const totalSeconds = e.target.currentTime;
            const progressBar = document.querySelector('.seeker-bar.fill');
            const progressFader = document.querySelector('.seeker-fader');
            const elapsedPercent = Math.floor((this.state.totalElapsed / this.state.totalDuration) * 100);
            progressFader.style.left = String(elapsedPercent/100 * 250 - 1) + "px"; 
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
    }

    beginSeeking(e){
        e.preventDefault();
        this.currentAudio.setAttribute('data-seeking', 'true');
        this.clickPos = e.clientX;
        this.startLeftOffset = -1;
        document.onmouseup = this.endSeeking;
        document.onmousemove = this.seekUpdate; 
    }

    seekUpdate(e){
        e.preventDefault();
        this.fader = document.querySelector('.seeker-fader');
        this.startLeftOffset = this.clickPos - e.clientX;
        this.clickPos = e.clientX;
        let newOffset = this.fader.offsetLeft - this.startLeftOffset;
        newOffset > 228 ? newOffset = 228 : newOffset;
        newOffset < -1 ? newOffset = -1 : newOffset;
        this.fader.style.left = String(newOffset) + "px";
        const timeMarkSeconds = (newOffset / 230) * this.state.totalDuration;
        let newMinutes = String(Math.floor(timeMarkSeconds / 60));
        let newSeconds = String(Math.floor(60 * ( (timeMarkSeconds/60) - Math.floor(timeMarkSeconds/60) ) ));
        if (newMinutes.length < 2) {newMinutes = '0'.concat(newMinutes) };
        if (newSeconds.length < 2) {newSeconds = '0'.concat(newSeconds) };
        this.setState({
            totalElapsed: timeMarkSeconds,
            elapsedMinutes: newMinutes,
            elapsedSeconds: newSeconds
        })
    }

    endSeeking(e){
        document.onmousemove = null;
        document.onmouseup = null;
        this.currentAudio.setAttribute('data-seeking', 'false');
        const percentage =  parseInt(this.fader.style.left.slice(0, -2)) / 228;
        this.currentAudio.currentTime = this.state.totalDuration * percentage;
    }

    render(){
        if (this.props.playlistSongs.length === 0) {
            return null;
        }
        let audioContent;
        let title;
        let buttonVisible;
        if (this.props.type === 'focus') {
            audioContent = this.props.playlistSongs[0];
            title = audioContent.name;
            buttonVisible = 'invisible'; 
        } else {
            audioContent = this.props.playlistSongs.filter(track => track.track === 1)[0];
            title = audioContent.name;
            buttonVisible = 'visible';
        }

        return (
            <div className="juke-box">
                <div id="audio-deck" />
                <div id="audio-holder">
                    <audio 
                        src={audioContent.audioUrl} 
                        id="focus-audio" 
                        preload="auto" 
                        onLoadedMetadata={this.setMainTimer} 
                        onTimeUpdate={this.updateElapsedTime}
                        onEnded={this.changeTrack}
                        data-playing={"false"}
                        className={`track${audioContent.track}`}
                        trackname={title}/>
                </div>
                <div className="focus-player">
                    <div className="play-pause-button" onClick={this.togglePlay}>
                        < this.state.toggleButton />
                    </div>
                    <div className="seeker-box">
                        <div className="track-info">
                            <span id="track-title">
                                {title}
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
                                        </div>
                                        <div className="seeker-fader" 
                                            onMouseDown={this.beginSeeking}>
                                        </div>
                                    </div>
                            </div>
                            <div className="seeker-buttons">
                                <div className={`back-button ${buttonVisible}`} onClick={this.changeTrack}>
                                    < BackButton />
                                </div>
                                <div className={`next-button ${buttonVisible}`} onClick={this.changeTrack}>
                                    < SkipButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale-info">
                    [all tracks are currently stream-only]
                </div>
                < Tracklist 
                    jukeType={this.props.type}
                    allTracks={this.props.playlistSongs}
                    artistId={this.props.artistId}
                    swapAndPlay={this.swapAndPlay}
                    changeTrack={this.changeTrack}
                />
            </div>
        )
    }
}

export default Jukebox;