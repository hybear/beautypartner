import React from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../User';
import { Button } from './styles';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const SignOut = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    onCompleted={data => {
      Router.push({
        pathname: '/',
      });
    }}
  >
    {signout => <Button onClick={signout}>Sign Out</Button>}
  </Mutation>
);

export default SignOut;
