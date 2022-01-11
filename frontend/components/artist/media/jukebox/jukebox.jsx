import React from "react";
import { Link } from "react-router-dom";
import { PlayButton, PauseButton, SkipButton, BackButton } from "../../../icons";

// class Jukebox extends React.Component {
//     constructor(props){
//         super(props)
//     }



//     render(){
//         if (this.props.playlistSongs.length === 0) {
//             return null;
//         }
//         return (
//             <div className="juke-box">
//                 <div className="focus-player">
//                     <div className="play-pause-button">
//                         < PlayButton />
//                     </div>
//                     <div className="seeker-box">
//                         <div className="track-info">

//                         </div>
//                         <div className="track-navigation">
//                             <div className="seeker-bar">
//                                 <div className="seeker-fader">

//                                 </div>
//                                 <div className="seeker-buttons">

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="sale-info">

//                 </div>
//                 <div className="playlist">

//                 </div>
//             </div>
//         )
//     }
// }

// export default Jukebox;



const Jukebox = props => {
    if (props.playlistSongs.length === 0) {
        return null;
    }
    if (props.type === 'playlist') {
        return (
            <ul className="playlist">
                {props.playlistSongs.map ((track) => (
                    <li key={`${track.id}${track.name}`}>
                        <audio controls src={track.audioUrl}/>
                        <Link to={`/storefront/${props.artistId}/track/${track.id}`}>
                            {track.name}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    } else {
        return (
            <div className="single-track">
                <audio controls src={props.song.audioUrl}/>
            </div>
        )
    }
}

export default Jukebox;