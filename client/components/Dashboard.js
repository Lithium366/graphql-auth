import React from 'react';
import Header from './Header';
import { graphql } from 'react-apollo';
import currentUser from '../queries/currentUser';

const Dashboard = ({
  data: { loading, user },
}) => {
  if (loading) return null;
  if (!user) {
    return (<div>You are not authenticated to see this route</div>);
  }

  return (
    <div>
      <h3>Dashboard</h3>
    </div>
  );
}

export default graphql(currentUser)(Dashboard);
