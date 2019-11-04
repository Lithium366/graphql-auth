import React, { Component } from 'react';
import AuthForm from './AuthForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit (e, email, password) {
    e.preventDefault();
    console.log(email, password);
  }

  render () {
    return <AuthForm onFormSubmit={this.onFormSubmit} />;
  }
}

export default LoginForm;
