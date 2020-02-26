import React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User';
import SignIn from '../SignIn';

export const Me = React.createContext();

const Middleware = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return null;
      console.log(data);
      if (!data.me) {
        return <SignIn />;
      }

      return (
        <Me.Provider value={{ info: data.me }}>
          <div>{props.children}</div>
        </Me.Provider>
      );
    }}
  </Query>
);

export default Middleware;
