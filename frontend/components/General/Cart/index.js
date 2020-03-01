import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';
import User from '../../User';
import formatMoney from '../../../lib/formatMoney';
import calcTotalPrice from '../../../lib/calcTotalPrice';
import RemoveFromCart from '../CartRemoveItem';
import Stripe from '../../Checkout/Integrations/Stripe';

// UI
import { CartStyles, CartItemList, CartItemStyles, CloseButton, Total } from './styles';
import { Title } from '../';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});

const CartItem = cartItem => {
  if (!cartItem.item)
    return (
      <CartItemStyles>
        <p>This Item has been removed</p>
      </CartItemStyles>
    );
  return (
    <CartItemStyles>
      <RemoveFromCart id={cartItem.id} />
      <img className="image" src={cartItem.item.image}></img>
      <p className="title">{cartItem.item.title}</p>
      <em className="value">
        {cartItem.quantity} &times;
        {cartItem.item.listPrice != cartItem.item.bestPrice && (
          <del className="listPrice">{formatMoney(cartItem.item.listPrice)}</del>
        )}
        <p className="bestPrice">{formatMoney(cartItem.item.bestPrice)}</p>
      </em>
      {/* <p className="total">{formatMoney(cartItem.item.bestPrice * cartItem.quantity)}</p> */}
    </CartItemStyles>
  );
};

const CartContainer = () => {
  return (
    <Composed>
      {({ user, toggleCart, localState }) => {
        const me = user.data.me;
        // if(!me) return null;
        return (
          <>
            <CartStyles open={localState.data.cartOpen}>
              <header>
                <CloseButton onClick={toggleCart}>&times;</CloseButton>
                <Title>{me && me.name.split(' ', 1) + "'s"} Cart</Title>
                {me && (
                  <p>
                    {me.cart.length > 0 ? `You have ${me.cart.length} products in your cart` : `Your cart is empty`}.
                  </p>
                )}
              </header>
              <CartItemList>{me && me.cart.map((cartItem, i) => <CartItem {...cartItem} key={i} />)}</CartItemList>
              <footer>
                <Total>Total: {me && formatMoney(calcTotalPrice(me.cart))}</Total>
                {/* <Link href="/checkout">
                                    <a><Button fullWidth>Checkout</Button></a>
                                </Link> */}
                <Stripe />
              </footer>
            </CartStyles>
          </>
        );
      }}
    </Composed>
  );
};

export default CartContainer;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
