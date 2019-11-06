import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import currentUser from '../queries/currentUser';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(newProps) {
      const { loading, user } = newProps.data;
      if (!loading && !user) {
        hashHistory.push('/login');
      }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return graphql(currentUser)(RequireAuth);
}
