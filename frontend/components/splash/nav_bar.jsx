import React from "react";
import { Link } from "react-router-dom";
import UserDropdownMenu from "./user_dropdown_menu";

class NavBar extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        if (!this.props.loggedIn) {
            return (   
            <nav>
                <ul>
                    <li className="home-button">
                        <Link to='/'>bandplace</Link>
                    </li>
                    <li className="search-bar">
                        [SEARCH BAR HERE]
                    </li>
                    <li>
                        <span onClick={this.props.openSignupMenu}>sign up</span>
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
                        < UserDropdownMenu user={this.props.currentUser} logout={this.props.logOut} />
                    </li>
                </ul>
            </nav>
            )
        }
    }
}


export default NavBar;