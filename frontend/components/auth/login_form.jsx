import React from "react";
import HomeButton from "../splash/home_button";
import Footer from "../splash/footer";

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                idString: '',
                password: ''
            }
        this.submitForm = this.submitForm.bind(this);
        this.updateField = this.updateField.bind(this);
        this.logInDemo = this.logInDemo.bind(this);
    }

    logInDemo(e){
        e.preventDefault();
        this.props.processForm({
            idString: 'T. Rex',
            password: 'rawramp'
        }).then((response) => this.props.history.push(`/storefront/${response.user.id}`));
    }

    submitForm(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then((response) => this.props.history.push(`/storefront/${response.user.id}`));
    }

    updateField(type){
        return e => this.setState({[type]: e.target.value});
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
                        <div className="session-form login-form">
                            <h3>
                                {this.props.formTitle}
                            </h3>
                            <form onSubmit={this.submitForm}>
                                <div className="labels">
                                    <label>
                                        Username / email
                                    </label>
                                    <label>
                                        Password 
                                    </label>
                                </div>
                                <div className="inputs">
                                    <input type="text" onChange={this.updateField('idString')} value={this.state.idString} name="username"/>
                                    <input type="password" onChange={this.updateField('password')} value={this.state.password} name="password" />
                                    <input type="submit" value="Log In" className="submit-button"/>
                                    <button className="submit-button" onClick={this.logInDemo}>
                                        Log In as glam-rock legends T. Rex
                                    </button>
                                    {this.renderErrors()}
                                </div>
                            </form>
                        </div>
                    </div>
                    < Footer />
                </div>
            )  
    }
}

export default LoginForm;