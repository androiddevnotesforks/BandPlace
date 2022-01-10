import React from "react";
import UserDropdownMenu from "../splash/user_dropdown_menu";
import AddMenu from "./add_menu.jsx"
import HomeButton from "../splash/home_button";

class ArtistPageNav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.loggedIn) {
            return (
                <nav className="artist-page-nav">
                    <div className="artist-nav left">
                        <div>
                            < HomeButton />
                        </div>
                        <div>
                            < AddMenu user={this.props.currentUser} />
                        </div>
                    </div>
                    <div className="artist-nav right">
                        <ul>
                            <li>
                                < UserDropdownMenu user={this.props.currentUser} logout={this.props.logOut} openColorsEditor={this.props.openColorsEditor}/>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className="artist-page-nav">
                <div className="artist-nav left">
                    < HomeButton />
                </div>
                <div className="artist-nav right">
                    <ul>
                        <li>
                        </li>
                    </ul>
                </div>
            </nav>
            )
        }
    }
}

export default ArtistPageNav;