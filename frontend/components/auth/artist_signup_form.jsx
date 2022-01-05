import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../splash/home_button";
import Footer from "../splash/footer";

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
        this.checkForCheck = this.checkForCheck.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        let newUser = Object.assign({}, this.state, {is_artist: true});
        delete newUser[this.state.confirmEmail];
        this.props.processForm(newUser)
            .then(() => this.props.history.push('/'));
    }

    updateField(type){
        return e => this.setState({[type]: e.target.value});
    }

    checkForCheck(e){
        let checkbox = document.querySelector('.terms-of-use');
        if (!checkbox.checked) {
            e.preventDefault();
            const newErrors = this.props.errors.concat('Ahem... please agree to the terms.')
            this.props.updateErrors(newErrors);
        }
    }

    renderErrors() {
        return (
            <ul className="session-errors">
                {this.props.errors.map ((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="page-box">
                <header className="auth-header">
                    <HomeButton />
                </header>
                <div className="form-box">

                    <div className='session-form artist-signup'>
                        <h3>
                            {this.props.formTitle}
                        </h3>
                        <form onSubmit={this.submitForm}>
                            <div className="labels">
                                <label>
                                    Artist/Band name (Username)
                                </label>
                                <label>
                                    Password 
                                </label>
                                <label>
                                    Email 
                                </label>
                                <label>
                                    Confirm email 
                                </label>
                            </div>
                            <div className="inputs">
                                <input type="text" onChange={this.updateField('username')} value={this.state.username} />
                                <input type="password" onChange={this.updateField('password')} value={this.state.password} />
                                <input type="text" onChange={this.updateField('email')} value={this.state.email}  />
                                <input type="text" onChange={this.updateField('confirmEmail')} value={this.state.confirmEmail} />
                                <div className="check-submit">
                                    <label>
                                        <input type="checkbox" className='terms-of-use' />I have read and agree to the Terms of Use.
                                    </label>
                                </div>
                                    <input type="submit" value="Sign up" className="submit-button" onClick={this.checkForCheck}/>
                                    {this.renderErrors()}
                                    <span>Already have an account? 
                                        <Link to='/login'>Log in.</Link>
                                    </span>
                            </div>
                        </form>
                    </div>
                </div>
                < Footer />
            </div>
         )
    }
}

export default ArtistSignupForm;