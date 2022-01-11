import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { PlayButton, PauseButton, SkipButton, BackButton } from "../../../icons";

class Jukebox extends React.Component {
    
    constructor(props){
        super(props)
        this.toggleButton = PlayButton;
        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidMount(){
        this.currentAudio = document.getElementById('focus-audio');
    }

    togglePlay(e){
        debugger
        if (this.currentAudio.playing) {
            this.currentAudio.pause();
            this.toggleButton = PlayButton;
        } else {
            this.currentAudio.play();
            this.toggleButton = PauseButton;
        }
    }

    updateTime(){
        
    }


    render(){

        if (this.props.playlistSongs.length === 0) {
            return null;
        }
        let audioContent;
        if (this.props.song) {
            audioContent = this.props.song;
        } else {
            audioContent = this.props.playlistSongs;
        }

        return (
            <div className="juke-box">
                <audio src={audioContent.audioUrl} id="focus-audio"/>
                <div className="focus-player">
                    <div className="play-pause-button" onClick={this.togglePlay} onTimeUpdate={this.updateTime}>
                        < this.toggleButton />
                    </div>
                    <div className="seeker-box">
                        <div className="track-info">
                            <span>
                                {audioContent.name}
                            </span>
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