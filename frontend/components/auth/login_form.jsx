import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                idString: '',
                password: ''
            }
        this.submitForm = this.submitForm.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => this.props.history.push('/'));
    }

    updateField(type){
        return e => this.setState({[type]: e.target.value});
    }

    renderErrors() {
        return (
            <ul className="session-errors">
                {this.props.errors[0].map ((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        )
    }

    render() {
            return (
                <div className="session-form">
                    <h3>
                        {this.props.formTitle}
                    </h3>
                    <form onSubmit={this.submitForm}>
                        <label>
                            Username / email
                            <input type="text" onChange={this.updateField('idString')} value={this.state.idString} />
                        </label>
                        <br/>
                        <label>
                            Password 
                            <input type="password" onChange={this.updateField('password')} value={this.state.password} />
                        </label>
                        <br/>
                        <input type="submit" value="Log In" className="submit-button"/>
                        <br/>
                        {this.renderErrors()}
                    </form>
                </div>
            )  
    }
}

export default LoginForm;