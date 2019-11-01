import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';

class Header extends Component {
  render () {
    const { user, loading } = this.props.data;

    if (loading) {
      return (<div>Loading</div>);
    }

    if (!user) {
      return (
        <div>Not logged in</div>
      );
    }

    return (
      <div>
        User: { user.email }
      </div>
    );
  }
}

export default graphql(query)(Header);
