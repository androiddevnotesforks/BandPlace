import React from "react";
import { Link } from "react-router-dom";

const AddMenu = props => (
    <div className="add-content">
        <span>
            <Link to="/edit/album/new" >
                + add new music
            </Link>
        </span>
        {/* <ul className="dropdown-menu add-content">
            <li>
                <Link to="/edit/album/new" >
                    add new music
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
         </ul> */}
    </div>
)

export default AddMenu;