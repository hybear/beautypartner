import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../User';
import CartRemoveItemStyles from './styles';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const RemoveFromCart = ({ id }) => {
  const update = (cache, payload) => {
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });

    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);

    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  return (
    <Mutation
      mutation={REMOVE_FROM_CART_MUTATION}
      variables={{ id: id }}
      update={update}
      optimisticResponse={{
        __typeName: 'Mutation',
        removeFromCart: {
          __typename: 'CartItem',
          id: id,
        },
      }}
    >
      {(removeFromCart, { loading, error }) => (
        <CartRemoveItemStyles
          title="Delete Item"
          onClick={() => {
            removeFromCart().catch(err => alert(err.message));
          }}
          disabled={loading}
          data-test="btnRemoveFromCart"
        >
          &times;
        </CartRemoveItemStyles>
      )}
    </Mutation>
  );
};

RemoveFromCart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveFromCart;
export { REMOVE_FROM_CART_MUTATION };
