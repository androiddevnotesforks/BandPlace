import React from "react";
import { Link } from "react-router-dom";
import UserDropdownMenu from "./user_dropdown_menu";
import HomeButton from "./home_button";

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchTerm: 'SEARCH GOES HERE'
        }
    }

    render() {
        if (!this.props.loggedIn) {
            return (   
            <nav className="welcome-nav">
                <ul>
                    <li>
                        <HomeButton />
                    </li>
                    <li className="search-bar">
                        <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}/>
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
            <nav className="active-nav">
                <ul>
                    <li>
                        <HomeButton />
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