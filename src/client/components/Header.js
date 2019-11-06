import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import logoutMutation from '../queries/logout';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.mutate({
      refetchQueries: [{ query }],
    });
  }

  renderButtons() {
    const { user, loading } = this.props.data;
    if (loading) return <div />;

    if (user) {
      return (
        <div><li><a onClick={this.onLogoutClick}>Logout</a></li></div>
      );
    }

    return (
      <div>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </div>
    );
  }

  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logoutMutation)(
  graphql(query)(Header)
);
