import React from "react";

class AlbumForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return null;
        // return (
            // <div className="edit-panel media">
            //             <div className="edit-panel left">
            //                 <div className="selected-media">
            //                     <div className="cover-image">
    
            //                     </div>
            //                     <div className="media-info">
            //                         <h2 className="default">{this.state.albumTitle}</h2>
            //                         <span>by WHOEVER</span>
            //                     </div>
            //                 </div>
            //                 <div className="general-controls">
            //                     <div className="file-adder">
            //                         <div className="audio-input-wrapper">
            //                             <input type="file" name="audio" accept="audio/*" onChange={this.updateFiles('soundFile')}/>
            //                         </div>
            //                         <span>600MB max, filetypes</span>
            //                     </div>
            //                     <div className="adder-buttons">
            //                         <button onClick={this.handleSubmit}>
            //                             Save Draft
            //                         </button>
            //                         <button>
            //                             cancel
            //                         </button>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="edit-panel right">
            //                 <form>
            //                     <div className="title-wrapper">
            //                         *
            //                         <input type="text" name="name" value={this.state.albumName} onChange={this.updateField('albumName')} className="default" />
            //                         <span className="border-span" />
            //                     </div>
            //                     <span> description:</span>
            //                     <textarea name="description" value={this.state.description} onChange={this.updateField('description')} className="default" />
            //                     <div className="image-input-wrapper">
            //                         <input type="file" name="cover" accept="image/*" onChange={this.updateFiles('artFile')} />
            //                     </div>
            //                 </form>
            //             </div>
            //         </div>
        // )
    }
}

export default AlbumForm;