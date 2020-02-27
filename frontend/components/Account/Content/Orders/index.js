import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import formatMoney from '../../../../lib/formatMoney';
import { format, formatDistance, parseISO } from 'date-fns';
import Link from 'next/link';

// UI
import { Title } from '../styles'; // Content
import {
  OrderStylesContainer,
  OrderListTitle,
  OrderList,
  OrderStyles,
  OrderTitle,
  OrderTotal,
  OrderButton,
} from './styles';

// ANIMATIONS
import Loading from '../../../General/Animations/ContentLoading';

const ALL_ORDERS_QUERY = gql`
  query ALL_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      charge
      total
      createdAt
      status
      paymentMethod
      cashback
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

const Order = order => (
  <OrderStyles>
    <Link href={`/orders/${order.id}`}>
      <a className="order">
        <span className="order__title idOrders">Order ID</span>
        <span className="order__title statusOrders">Status</span>
        <span className="order__title dateOrders">Date</span>
        <span className="order__title totalOrders">Total</span>
        <span className="order__title cashbackOrders">Cashback</span>
        <span className="order__info idValOrders">{order.id}</span>
        <span className="order__info statusValOrders">{order.status}</span>
        <span className="order__info dateValOrders">{formatDistance(parseISO(order.createdAt), new Date())} ago</span>
        <span className="order__info totalValOrders">${order.total.toFixed(2)}</span>
        <span className="order__info cashbackValOrders">
          +
          {formatMoney(
            (order.items.reduce((tally, cartItem) => tally + cartItem.bestPrice * cartItem.quantity, 0) *
              order.cashback) /
              100
          )}
          <small>{order.cashback}%</small>
        </span>
      </a>
    </Link>
  </OrderStyles>
);

const Orders = () => {
  return (
    <Query query={ALL_ORDERS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <Loading isStoped={false} />;
        if (error) return <Error error={error} />;

        const orders = data.orders;
        return (
          <OrderStylesContainer data-test="orders">
            <Title>Orders</Title>
            <OrderTotal>You have a total of {orders.length} orders</OrderTotal>
            <OrderListTitle></OrderListTitle>
            <OrderList className="orderList">
              {orders.map((order, i) => (
                <Order {...order} key={i} />
              ))}
            </OrderList>
            <OrderButton primary>
              <Link href="/products">
                <a>New Order</a>
              </Link>
            </OrderButton>
          </OrderStylesContainer>
        );
      }}
    </Query>
  );
};

export default Orders;
export { ALL_ORDERS_QUERY };
