import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../User';

// UI
import { AddToCartStyles } from './styles';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const AddToCart = props => {
  return (
    <Mutation
      mutation={ADD_TO_CART_MUTATION}
      variables={{ id: props.id }}
      refetchQueries={[
        {
          query: CURRENT_USER_QUERY,
        },
      ]}
    >
      {(addToCart, { loading, error }) => (
        <AddToCartStyles {...props} fullWidth onClick={addToCart} disabled={loading} data-test="btnAddtoCart">
          Add{loading && 'ing'} To Cart
        </AddToCartStyles>
      )}
    </Mutation>
  );
};

export default AddToCart;
export { ADD_TO_CART_MUTATION };
