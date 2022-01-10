import React from "react";

class EditMedia extends React.Component{
    constructor(props){
        super(props);
    }

    setFieldNames(){

    }

// NEED TO ADD OWNERSHIP CHECK

    render() {
        if (this.props.albumId === 'new' || this.props.trackId === 'new') {
            if (this.props.type === 'album') {
                return (
                    <div className="edit-panel media">
                        <div className="edit-panel left">

                        </div>
                        <div className="edit-panel right">
        
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="edit-panel media">
                        <div className="edit-panel left">
        
                        </div>
                        <div className="edit-panel right">
        
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <div className="edit-panel media">
                    <div className="edit-panel left">
    
                    </div>
                    <div className="edit-panel right">
    
                    </div>
                </div>
            )
        }
    }
}

export default EditMedia;