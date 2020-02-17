import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import formatMoney from '../../../../../lib/formatMoney';
import { format, formatDistance, parseISO } from 'date-fns';
import Link from 'next/link';

// UI
import { Title } from '../../styles'; // Content
import { OrderStylesContainer, OrderStyles, OrderButton } from './styles';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      status
      cashback
      paymentMethod
      user {
        id
      }
      items {
        id
        title
        description
        image
        listPrice
        bestPrice
        quantity
      }
    }
  }
`;

const Order = ({ id }) => {
  return (
    <Query query={SINGLE_ORDER_QUERY} variables={{ id }}>
      {({ data, error, loading }) => {
        // if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;

        const { order } = data;
        console.log(order);

        return (
          <OrderStylesContainer>
            <OrderStyles>
              <Title>Order: {order.id}</Title>
              <div className="order">
                <span className="order__title">Status</span>
                <span className="order__title">Date</span>
                <span className="order__title">Total</span>
                <span className="order__title">Cashback</span>
                <span className="order__info status">{order.status}</span>
                <span className="order__info date">{formatDistance(parseISO(order.createdAt), new Date())} ago</span>
                <span className="order__info total">{formatMoney(order.total)}</span>
                <span className="order__info cashback">
                  +
                  {formatMoney(
                    (order.items.reduce((tally, cartItem) => tally + cartItem.bestPrice * cartItem.quantity, 0) *
                      order.cashback) /
                      100
                  )}
                  <small>{order.cashback}%</small>
                </span>
              </div>
            </OrderStyles>
          </OrderStylesContainer>
        );
      }}
    </Query>
  );
};

Order.PropTypes = {
  id: PropTypes.string.isRequired,
};

export default Order;
