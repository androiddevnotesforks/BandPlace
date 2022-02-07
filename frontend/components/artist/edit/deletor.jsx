import React from "react";

class Deletor extends React.Component {
    constructor(props){
        super(props);
        this.albumDeletor = this.albumDeletor.bind(this);
        this.songPageDeletor = this.songPageDeletor.bind(this);
        this.editPageDeletor = this.editPageDeletor.bind(this);
    }

    albumDeletor(){
        this.props.destroyRelease(this.props.contentId)
            .then(this.props.closeModal)
            .then(this.props.goToStorefront);
    }

    songPageDeletor(){
        this.props.destroySong(this.props.contentId)
            .then(this.props.closeModal)
            .then(this.props.goToStorefront);
    }

    editPageDeletor(){
        
    }

    render(){
        let contentName = '';
        let deletorFunction = null;
        if (this.props.type === 'release') {
            contentName = 'album';
            deletorFunction = this.albumDeletor;
        } else if (this.props.type === 'song-page') {
            contentName = 'song';
            deletorFunction = this.songPageDeletor;
        } else {
            contentName = 'song';
            deletorFunction = this.editPageDeletor;
        }

        return (
            <div className="deletor-box">
                <span>Are you sure you want to delete this {`${contentName}`}?</span>
                <p>This cannot be undone.</p>
                <div className="buttons-holder">
                    <button onClick={deletorFunction}>Delete forever</button>
                    <button onClick={this.props.closeModal}>cancel</button>
                </div>
            </div>
        )
    }
}

export default Deletor;