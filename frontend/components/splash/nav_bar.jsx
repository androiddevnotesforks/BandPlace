import React from "react";
import { Link } from "react-router-dom";
import UserDropdownMenu from "./user_dropdown_menu";
import HomeButton from "./home_button";
// import { BellIcon, SearchIcon } from "../icons";
import SearchContainer from "../search/search_container";

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchTerm: `Search coming soon!`
        }
    }

    render() {
        if (!this.props.loggedIn) {
            return (   
            <nav className="welcome-nav">
                <div className="nav-wrangler">
                    <div className="home-banner">
                        <HomeButton />
                        <div>
                            <span>Discover amazing new music and</span><span className="highlight"> directly support </span><span> the artists who make it.</span>
                        </div>
                    </div>
                    <div className="welcome-nav nav-links">
                        <div className="search-bar">
                            {/* <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})} onClick={(e) => 
                        e.target.value === 'Search coming soon!' ? e.target.value = '' : null}/> */}
                            < SearchContainer />
                            {/* < SearchIcon /> */}
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
                    {/* <div className="search-bar"> */}
                        {/* <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})} onClick={(e) => 
                        e.target.value === 'Search coming soon!' ? e.target.value = '' : null}/> */}
                        < SearchContainer />
                        {/* < SearchIcon /> */}
                    {/* </div> */}
                </div>
                <div className="right-navbox">
                        <div>
                            {/* Bandplace Gift Cards */}
                        </div>
                        <div>
                            {/* < BellIcon /> */}
                        </div>
                        <div>
                            < UserDropdownMenu user={this.props.currentUser} logout={this.props.logOut} openColorsEditor={this.props.openColorsEditor}/>
                        </div>
                </div>
            </nav>
            )
        }
    }
}


export default NavBar;