import React from "react";
import { Link } from "react-router-dom";

class EditProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.userData.id,
            username: this.props.userData.username,
            location: (this.props.userData.location || ''),
            bio: (this.props.userData.bio || ''),
            artFile: null,
            artUrl: null
        };
        this.processSubmit = this.processSubmit.bind(this);
        this.getArtUrl = this.getArtUrl.bind(this);
        this.updateProfPic = this.updateProfPic.bind(this);
        this.resetImage = this.resetImage.bind(this);
    }

    componentDidMount(){
        if (this.props.userData.profPicUrl) {
            this.setState({artUrl: this.props.userData.profPicUrl})
        }
    }

    updateField(type){
        return e => this.setState({[type]: e.target.value});
    }

    updateProfPic(e){
        const artFile = e.target.files[0]; 
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({artFile, artUrl: fileReader.result});
        }
        if (artFile) fileReader.readAsDataURL(artFile);
    }

    getArtUrl(){
        if (this.state.artUrl  && document.querySelector('.image-input-wrapper')) {
            const uploadImageBox = document.querySelector('.image-input-wrapper');
            uploadImageBox.classList.remove('empty');
            Array.from(uploadImageBox.children).forEach (el => {
                if (!Array.from(el.classList).includes('invisible')) el.classList.add('invisible');
            });
            document.querySelector('.remove-image').classList.remove('invisible');
            return `url(${this.state.artUrl})`;
        } else {
            return 'none';
        }
    }

    resetImage(){
        const uploadImageBox = document.querySelector('.image-input-wrapper');
        uploadImageBox.classList.add('empty');
        Array.from(uploadImageBox.children).forEach (el => {
            if (Array.from(el.classList).includes('invisible')) el.classList.remove('invisible');
        });
        document.querySelector('.remove-image').classList.add('invisible');
        this.setState({
            artFile: null,
            artUrl: null
        })
    }

    processSubmit(e){
        e.preventDefault();
        const userData = new FormData();
        userData.append('user[username]', this.state.username);
        userData.append('user[id]', this.state.id);
        userData.append('user[location]', this.state.location);
        userData.append('user[bio]', this.state.bio);
        if (this.state.artFile) {
            userData.append('user[profile_image]', this.state.artFile);
        } 
        this.props.processForm(userData)
            .then(this.props.backToStore)
    }

    render() {
        return (
            <div className="edit-panel">
                <h3>Artist Profile for {this.state.username}</h3>
                <form>
                    <h4>Account Details</h4>
                    <div className="edit-account-details">
                        <div className="eidt-account inputs">
                            <div className="edit-account text">
                                <label>Username (band name)
                                    <input type="text" value={this.state.username} onChange={this.updateField('username')} />
                                </label>
                                <label>Location
                                    <input type="text" value={this.state.location} onChange={this.updateField('location')} />
                                </label>
                                <label>Bio
                                    <textarea value={this.state.bio} onChange={this.updateField('bio')} />
                                </label>
                            </div>
                            <div className="image-input-wrapper empty" style={{backgroundImage: `${this.getArtUrl()}`, backgroundSize: 'cover'}}>
                                <label htmlFor="image-input">Upload profile image</label>
                                <input type="file" name="profPic" accept="image/*" onChange={this.updateProfPic} id="image-input" />
                                <div className="remove-image invisible" onClick={this.resetImage}>X</div>
                            </div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={this.processSubmit}>
                                Save
                            </button>
                            <button>
                                <Link to={`/storefront/${this.props.userData.id}`}>
                                    Cancel
                                </Link>
                            </button> 
                        </div>
                    </div> 
                </form>
            </div>
        )
    }
}

export default EditProfile;