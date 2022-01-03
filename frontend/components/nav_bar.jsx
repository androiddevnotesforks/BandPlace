import React from "react";
import { Link } from "react-router-dom";
import UserDropdownMenu from "./user_dropdown_menu";

const NavBar = (props) => {
    if (!props.loggedIn) {
        return (   
        <nav>
            <ul>
                <li>
                    <Link to='/'>bandplace</Link>
                </li>
                <li>
                    SEARCH BAR HERE
                </li>
                <li>
                    <span onClick={props.openSignupMenu}>sign up</span>
                </li>
                <li>
                    <Link to='/login'>log in</Link>
                </li>
            </ul>
        </nav>
        )
    } else {
        return (
            <nav>
            <ul>
                <li>
                    <Link to='/'>bandplace</Link>
                </li>
                <li>
                    SEARCH BAR HERE
                </li>
                <li>
                    < UserDropdownMenu user={props.currentUser} logout={props.logOut} />
                </li>
            </ul>
        </nav>
        )
    }
}


export default NavBar;