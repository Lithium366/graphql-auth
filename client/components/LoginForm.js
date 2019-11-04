import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import currentUser from '../queries/currentUser';
import loginMutation from '../queries/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit (e, email, password) {
    e.preventDefault();
    this.setState({ errors: []});

    this.props.mutate({
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: currentUser }],
    }).catch((err) => {
      this.setState({ errors: err.graphQLErrors.map((e) => e.message) });
    });
  }

  componentWillUpdate (nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  render () {
    return (
      <div>
        <h3>Login form</h3>
        <AuthForm
          onFormSubmit={this.onFormSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(loginMutation)(
  graphql(currentUser)(LoginForm)
);
