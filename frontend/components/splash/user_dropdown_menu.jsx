import React from "react";
import { VialIcon } from "../icons";
import { Link } from "react-router-dom";

class UserDropdownMenu extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="dropdown-root">
                <VialIcon />
                <ul className="dropdown-menu">
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
                    <li>
                        tools
                    </li>
                    <li onClick={this.props.openColorsEditor}>
                        page design
                    </li>
                    <li>
                        subscription
                    </li>
                    <li>
                        settings
                    </li>
                    <li>
                        guide 
                    </li>
                    <li>
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