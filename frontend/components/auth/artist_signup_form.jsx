import React from "react";
import { Link } from "react-router-dom";

class ArtistSignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            confirmEmail: ''
        }
        this.submitForm = this.submitForm.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        let newUser = Object.assign({}, this.state, {is_artist: true});
        delete newUser[this.state.confirmEmail];
        this.props.processForm(newUser)
            .then(() => this.props.history.push('/'));;
    }

    updateField(type){
        return e => this.setState({[type]: e.target.value});
    }

    render() {
        return (
            <div className='session-form'>
                <h3>
                    {this.props.formTitle}
                </h3>
                <form onSubmit={this.submitForm}>
                    <label>
                        Artist/Band name (Username)
                        <input type="text" onChange={this.updateField('username')} value={this.state.username} />
                    </label>
                    <br/>
                    <label>
                        Password 
                        <input type="password" onChange={this.updateField('password')} value={this.state.password} />
                    </label>
                    <br/>
                    <label>
                        Email 
                        <input type="text" onChange={this.updateField('email')} value={this.state.email}  />
                    </label>
                    <br/>
                    <label>
                        Confirm email 
                        <input type="text" onChange={this.updateField('confirmEmail')} value={this.state.confirmEmail} />
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" className='terms-of-use' />
                        I have read and agree to the Terms of Use.
                    </label>
                    <br/>
                    <input type="submit" value="Sign up" className="submit-button"/>
                    <br/>
                    <span>Already have an account? 
                        <Link to='/login'>Log in.</Link>
                    </span>
                </form>
            </div>
         )
    }
}

export default ArtistSignupForm;