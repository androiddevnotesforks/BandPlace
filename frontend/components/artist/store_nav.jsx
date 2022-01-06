import React from "react";

class StoreNav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav className="store-nav">
                <ul>
                    <li>
                        music
                    </li>
                    <li>
                        merch
                    </li>
                    <li>
                        community
                    </li>
                </ul>
                <span>
                    edit button
                </span>
            </nav>
        )
    }
}

export default StoreNav;