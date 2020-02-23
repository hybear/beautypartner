import propTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import formatMoney from '../../../../../lib/formatMoney';
import { format, formatDistance, parseISO } from 'date-fns';
import Link from 'next/link';

// UI
import { OrderStylesContainer, OrderTitle, OrderStyles, OrderInfo, OrderItems, OrderButton } from './styles';

// ANIMATIONS
import Loading from '../../../../General/Animations/ContentLoading';

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
        if (loading) return <Loading isStoped={false} />;

        const { order } = data;

        return (
          <OrderStylesContainer>
            <OrderStyles data-test="order">
              <OrderTitle>Order: {order.id}</OrderTitle>
              <OrderInfo>
                <span className="title status">Status</span>
                <span className="title date">Date</span>
                <span className="title total">Total</span>
                <span className="title cashback">Cashback</span>
                <span className="content statusVal">{order.status}</span>
                <span className="content dateVal">{formatDistance(parseISO(order.createdAt), new Date())} ago</span>
                <span className="content totalVal">{formatMoney(order.total)}</span>
                <span className="content cashbackVal">
                  +
                  {formatMoney(
                    (order.items.reduce((tally, cartItem) => tally + cartItem.bestPrice * cartItem.quantity, 0) *
                      order.cashback) /
                      100
                  )}
                  <small>{order.cashback}%</small>
                </span>
              </OrderInfo>
              <OrderItems>
                <span className="title">Photo</span>
                <span className="title">Title</span>
                <span className="title">Quantity</span>
                <span className="title">Unit Price</span>
                <span className="title">Total</span>
                {order.items.map(item => (
                  <div className="item">
                    <img className="item__picture" src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.quantity}</p>
                    <p>{formatMoney(item.bestPrice)}</p>
                    <p>{formatMoney(item.bestPrice * item.quantity)}</p>
                  </div>
                ))}
              </OrderItems>
            </OrderStyles>
          </OrderStylesContainer>
        );
      }}
    </Query>
  );
};

Order.propTypes = {
  id: propTypes.string.isRequired,
};

export default Order;
export { SINGLE_ORDER_QUERY };
