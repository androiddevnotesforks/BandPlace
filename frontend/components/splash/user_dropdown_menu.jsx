import React from "react";
import { VialIcon } from "../icons";
import { Link } from "react-router-dom";

class UserDropdownMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="dropdown-root user-menu">
                <div className="mini-prof-pic">
                    <img src={this.props.user.profPicUrl} />
                </div>
                <ul className="dropdown-menu user-menu">
                    <li>
                        <Link to={`/storefront/${this.props.user.id}`}>
                            view site
                        </Link>
                    </li>
                    <li>
                        <Link to={`/edit/profile/${this.props.user.id}`}>
                            edit profile
                        </Link>
                    </li>
                    <li className="not-available">
                        tools
                    </li>
                    <li onClick={ this.props.openColorsEditor } >
                        <Link to={`/storefront/${this.props.user.id}`}>
                            page design
                        </Link>
                    </li>
                    <li className="divider-top not-available">
                        subscription
                    </li>
                    <li id='dropdown-divider'>
                        <div id="divider-line">

                        </div>
                    </li>
                    <li className="divider-bottom not-available">
                        settings
                    </li>
                    <li className="not-available">
                        guide 
                    </li>
                    <li className="not-available">
                        help
                    </li>
                    <li onClick={this.props.logout}>
                        log out
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserDropdownMenu;