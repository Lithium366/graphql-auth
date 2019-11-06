import React, { Component } from 'react';

class AuthForm extends Component {
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
    const { onFormSubmit, errors } = this.props;
    const { email, password } = this.state;

    return (
      <div className="row">
        <form className="cl s4" onSubmit={(e) => onFormSubmit(e, email, password)}>
          <div className="input-field">
            <input placeholder="Email" value={email} name="email" onChange={this.onEmailChange} />
          </div>
          <div className="input-field">
            <input placeholder="Password" value={password} name="password" type="password" onChange={this.onPasswordChange} />
          </div>
          { errors &&
            <div className="errors">
              { errors.map(error => (
                <div key={error}>{error}</div>
              )) }
            </div>
          }
          <div className="input-field">
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthForm;
