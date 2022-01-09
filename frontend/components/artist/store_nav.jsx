import React from "react";

class StoreNav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav className="store-nav">
                <ul>
                    <li className="store-nav-link link-text current-link">
                        music
                    </li>
                    <li className="store-nav-link link-text">
                        merch
                    </li>
                    <li className="store-nav-link link-text">
                        community
                    </li>
                </ul>
                <span className="link-text">
                    "edit button"
                </span>
            </nav>
        )
    }
}

export default StoreNav;