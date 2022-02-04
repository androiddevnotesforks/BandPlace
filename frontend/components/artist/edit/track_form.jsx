import React from "react";

class TrackForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.track.name
        }
    }

    render(){
        return (
            <li>
                {this.state.name}
            </li>
        )
    }
}

export default TrackForm;