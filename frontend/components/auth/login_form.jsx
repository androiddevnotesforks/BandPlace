import React from "react";

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

    render() {
            return (
                <div className='session-form'>
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
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            )  
    }
}

export default LoginForm;