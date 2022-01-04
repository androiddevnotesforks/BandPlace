import React from "react";
import { Link } from "react-router-dom";
import UserDropdownMenu from "./user_dropdown_menu";
import HomeButton from "./home_button";
import { BellIcon } from "../icons";

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
                <div className="nav-wrangler">
                    <div className="home-banner">
                        <HomeButton />
                        <span>Discover amazing new music and directly support the artists who make it.</span>
                    </div>
                    <div className="welcome-nav nav-links">
                        <div className="search-bar">
                            <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})} onClick={(e) => 
                        e.target.value === 'SEARCH GOES HERE' ? e.target.value = '' : null}/>
                        </div>
                        <ul>
                            <li>
                                <span onClick={this.props.openSignupMenu}>sign up</span>
                            </li>
                            <li>
                                <Link to='/login'>log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            )
        } else {
            return (
            <nav className="active-nav">
                <div className="left-navbox">
                    <HomeButton />
                    <div className="search-bar">
                        <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})} onClick={(e) => 
                        e.target.value === 'SEARCH GOES HERE' ? e.target.value = '' : null}/>
                    </div>
                </div>
                <div className="right-navbox">
                        <div>
                            Bandplace Gift Cards
                        </div>
                        <div>
                            < BellIcon />
                        </div>
                        <div>
                            < UserDropdownMenu user={this.props.currentUser} logout={this.props.logOut} />
                        </div>
                </div>
            </nav>
            )
        }
    }
}


export default NavBar;