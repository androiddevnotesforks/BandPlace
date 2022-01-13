import React from "react";

class EditMedia extends React.Component{
    constructor(props){
        super(props);
    }

    setFieldNames(){

    }


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
                            <div className="selected-media">
                                <div className="cover-image">

                                </div>
                                <div className="media-info">
                                    <h2>Untitled Track</h2>
                                    <span>by WHOEVER</span>
                                </div>
                            </div>
                            <div className="general-controls">
                                <div className="file-adder">
                                    <h3>add audio</h3>
                                    <span>600MB max, filetypes</span>
                                </div>
                                <div className="adder-buttons">
                                    <button>
                                        Save Draft
                                    </button>
                                    <button>
                                        cancel
                                    </button>
                                </div>
                            </div>
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