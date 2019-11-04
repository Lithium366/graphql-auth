import React, { Component } from 'react';

class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render () {
    const { onFormSubmit } = this.props;
    const { email, password } = this.state;

    return (
      <div className="row">
        <form className="cl s4" onSubmit={(e) => onFormSubmit(e, email, password)}>
          <div className="input-field">
            <label>Email</label>
            <input value={email} name="email" onChange={this.onEmailChange} />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input value={password} name="password" type="password" onChange={this.onPasswordChange} />
          </div>
          <div className="input-field">
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
