import React from "react";
import { Link } from "react-router-dom";

class FanSignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2'
        }
        this.submitForm = this.submitForm.bind(this);
        this.updateField = this.updateField.bind(this);
        this.checkForCheck = this.checkForCheck.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        let newUser = Object.assign({}, this.state, {is_artist: false});
        this.props.processForm(newUser).then(() => this.props.closeModal());
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
        if (this.props.errors.length === 0) return null;
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
                    <span onClick={this.props.closeModal}>x</span>
                </h3>
                <form onSubmit={this.submitForm}>
                        <p>
                            Email address
                        </p>
                        <input type="text" onChange={this.updateField('email')} value={this.state.email}  />
                    {/* <br/> */}
                        <p>
                            Password 
                        </p>
                        <input type="password" onChange={this.updateField('password')} value={this.state.password} />
                    {/* <br/> */}
                        <p>
                            Username
                        </p>
                        <input type="text" onChange={this.updateField('username')} value={this.state.username} />
                    {/* <br/> */}
                    <p className="terms-tag">
                        <input type="checkbox" className='terms-of-use' />
                        I have read and agree to the <span>Terms of Use.</span>
                    </p>
                    {/* <br/> */}
                    <input type="submit" value="Sign up" className="submit-button" onClick={this.checkForCheck}/>
                    {/* <br/> */}
                    {this.renderErrors()}
                    {/* <br/> */}
                    <p className="post-tag">Already have an account? 
                        <Link to='/login' onClick={this.props.closeModal}>Log in.</Link>
                    </p>
                </form>
            </div>
         )
    }
}

export default FanSignupForm;