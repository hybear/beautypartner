import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import formatMoney from '../../../../lib/formatMoney';
import { format, formatDistance, parseISO } from 'date-fns';

// UI
import { Title } from '../styles'; // Content
import { OrderStylesContainer, OrderList, OrderTitle, OrderTotal } from './styles';

const ALL_ORDERS_QUERY = gql`
  query ALL_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      charge
      total
      createdAt
      status
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

const Order = order => (
  <li>
    <span>{order.id}</span>
    <span>{order.status}</span>
    <span>{formatDistance(parseISO(order.createdAt), new Date())} ago</span>
    <span>{formatMoney(order.total)}</span>
  </li>
);

const Orders = () => {
  return (
    <Query query={ALL_ORDERS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return 'Loading...';
        if (error) return <Error error={error} />;

        const orders = data.orders;
        return (
          <OrderStylesContainer>
            <Title>Orders</Title>
            <OrderTotal>You have a total of {orders.length} orders</OrderTotal>
            <OrderList>
              {orders.map(order => (
                <Order {...order} />
              ))}
            </OrderList>
          </OrderStylesContainer>
        );
      }}
    </Query>
  );
};

export default Orders;
