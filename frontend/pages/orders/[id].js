import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Order from '@components/Account/Content/Orders/Order';
import Meta from '@components/Meta';

const OrdersPage = props => {
  return (
    <Middleware>
      <Meta title="Orders" desc="Check your orders, vip status and make new orders" />
      <Account active="orders">
        <Order id={props.query.id} />
      </Account>
    </Middleware>
  );
};

export default OrdersPage;
