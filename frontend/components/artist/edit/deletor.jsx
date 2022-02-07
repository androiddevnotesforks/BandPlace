import React from "react";

class Deletor extends React.Component {
    constructor(props){
        super(props);
        this.albumDeletor = this.albumDeletor.bind(this);
        this.songPageDeletor = this.songPageDeletor.bind(this);
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

    // newReleaseDeletor(){
    //     this.props.closeModal;
    // }

    // editReleaseDeletor(){
    //     // this.props.destroySong()
    // }

    render(){
        let action = '';
        let deletorFunction = null;
        if (this.props.type === 'release') {
            action = 'delete this album';
            deletorFunction = this.albumDeletor;
        } else if (this.props.type === 'song-page') {
            action = 'delete this song';
            deletorFunction = this.songPageDeletor;
        } else if (this.props.type === 'new-page') {
            action = 'delete this song from the album';
            deletorFunction = this.newReleaseDeletor;
        } else {
            action = 'delete this song from the album';
            deletorFunction = this.editReleaseDeletor;
        }

        return (
            <div className="deletor-box">
                <span>Are you sure you want to {`${action}`}?</span>
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