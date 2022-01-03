import React from "react";

class UserDropdownMenu extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="dropdown-root">
                <h3>{this.props.user.username}</h3>
                <ul className="dropdown-menu">
                    <li>
                        view site
                    </li>
                    <li>
                        edit profile
                    </li>
                    <li>
                        tools
                    </li>
                    <li>
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