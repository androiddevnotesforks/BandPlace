import React from "react";
import { Link } from "react-router-dom";

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