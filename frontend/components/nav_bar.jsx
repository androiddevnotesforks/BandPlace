import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to='/'>bandplace</Link>
            </li>
            {/* <li>
                <SEARCH/>
            </li> */}
            <li>
                <Link to='/signup'>sign up</Link>
            </li>
            <li>
                <Link to='/login'>log in</Link>
            </li>
        </ul>
            {/* if logged in, USER MENU */}
    </nav>
)


export default NavBar;