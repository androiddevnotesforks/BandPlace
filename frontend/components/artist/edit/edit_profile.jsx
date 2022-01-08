import React from "react";
import { Link, Redirect } from "react-router-dom";

class EditProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.userData.id,
            username: this.props.userData.username,
            location: (this.props.userData.location || ''),
            bio: (this.props.userData.bio || '')
        };
        this.processSubmit = this.processSubmit.bind(this);
    }

    updateField(type){
        return e => this.setState({[type]: e.target.value});
    }

    processSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then(this.props.backToStore)
    }

    render() {
        return (
            <div className="edit-panel">
                <h3>Artist Profile for {this.state.username}</h3>
                <form>
                    <h4>Account Details</h4>
                    <div className="edit-account-details">
                         <label>Username / band name
                            <input type="text" value={this.state.username} onChange={this.updateField('username')} />
                         </label>
                         <label>Location
                             <input type="text" value={this.state.location} onChange={this.updateField('location')} />
                         </label>
                         <label>Bio
                             <input type="textarea" value={this.state.bio} onChange={this.updateField('bio')} />
                         </label>
                         <label>Profile Image
                             <div>
                                 UPLOAD BOX HERE
                             </div>
                         </label>
                        <button onClick={this.processSubmit}>
                            Save
                        </button>
                        <button>
                            <Link to={`/storefront/${this.props.userData.id}`}>
                                Cancel
                            </Link>
                        </button> 
                    </div> 
                </form>
            </div>
        )
    }
}

export default EditProfile;