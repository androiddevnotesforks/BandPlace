import React from "react";
import { Link } from "react-router-dom";

class FanSignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
        this.submitForm = this.submitForm.bind(this);
        this.updateField = this.updateField.bind(this);
        this.checkForCheck = this.checkForCheck.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        let newUser = Object.assign({}, this.state, {is_artist: false});
        this.props.processForm(newUser)
            .then(() => this.props.history.push('/'));;
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
            <div className='session-form fan-signup'>
                <h3>
                    {this.props.formTitle}
                </h3>
                <form onSubmit={this.submitForm}>
                    <label>
                        Email address
                        <input type="text" onChange={this.updateField('email')} value={this.state.email}  />
                    </label>
                    <br/>
                    <label>
                        Password 
                        <input type="password" onChange={this.updateField('password')} value={this.state.password} />
                    </label>
                    <br/>
                    <label>
                        Username
                        <input type="text" onChange={this.updateField('username')} value={this.state.username} />
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" className='terms-of-use' />
                        I have read and agree to the Terms of Use.
                    </label>
                    <br/>
                    <input type="submit" value="Sign up" className="submit-button" onClick={this.checkForCheck}/>
                    <br/>
                    {this.renderErrors()}
                    <br/>
                    <span>Already have an account? 
                        <Link to='/login' onClick={this.props.closeModal}>Log in.</Link>
                    </span>
                </form>
            </div>
         )
    }
}

export default FanSignupForm;