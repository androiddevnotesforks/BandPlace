import React from "react";
import { Link } from "react-router-dom";

const AddMenu = props => (
    <div className="dropdown-root add-content">
        <span>
            + add 
        </span>
        <ul className="dropdown-menu add-content">
            <li>
                <Link to="/edit/album/new" >
                    album
                </Link>
            </li>
            <li>
                <Link to="/edit/track/new" >
                    track
                </Link>
            </li>
            <li>
                merch
            </li>
        </ul>
    </div>
)

export default AddMenu;