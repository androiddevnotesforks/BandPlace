import React from "react";

class StoreNav extends React.Component {
    constructor(props){
        super(props)
        this.fullStyle = {
            'color': props.linkColor.color,
            'backgroundColor': props.background.backgroundColor
        }
    }

    handleHover(e){
        // console.log(e.target);
    }

    handleHoverEnd(e){
        
    }

    render(){
        return (
            <nav className="store-nav" style={this.props.background}>
                <ul style={this.props.linkColor} onMouseOver={this.handleHover} onMouseOut={this.handleHoverEnd}>
                    <li className="store-nav-link link-text current-link" style={this.props.activeColor}>
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