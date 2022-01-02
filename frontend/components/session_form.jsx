import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        if (props.formType === 'signup') {
            this.state = {
                username: '',
                password: '',
                email: '',
                confirmEmail: ''
            }
        } else {
            this.state = {
                idString: '',
                password: ''
            }
        }
        this.submitForm = this.submitForm.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        if (this.props.formType === 'login') {
            this.props.processForm(this.state);
        } else {
            let newUser = Object.assign({}, this.state, {is_artist: true});
            delete newUser[this.state.confirmEmail];
            this.props.processForm(newUser);
        }
    }

    updateField(type){
        return e => this.setState({[type]: e.target.value})
    }

    render() {
        let usernameField;
        this.formType === 'login' ? usernameField = 'Username / email' : usernameField = 'Artist Name / Username';
        return (
            <div>
                <header>
                    <Link to='/'>bandplace</Link>
                </header>
                <h3>
                    {this.props.formTitle}
                </h3>
                <form onSubmit={this.submitForm} className='artist-signup-form'>
                    <label>
                        {usernameField}
                        <input type="text" onChange={this.updateField('username')} value={this.props.username} />
                    </label>
                    <label>
                        Password 
                        <input type="password" onChange={this.updateField('password')} value={this.props.password} />
                    </label>
                    <label>
                        Email 
                        <input type="text" onChange={this.updateField('email')} value={this.props.email} />
                    </label>
                    <label>
                        Confirm email 
                        <input type="text" onChange={this.updateField('confirmEmail')} value={this.props.confirmEmail} />
                    </label>
                    <label>
                        <input type="checkbox" className='terms-of-use' />
                        I have read and agree to the Terms of Use.
                    </label>
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        )
    }
}

export default SessionForm;