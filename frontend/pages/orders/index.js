import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Orders from '@components/Account/Content/Orders';
import Meta from '@components/Meta';

function OrdersPage() {
  return (
    <Middleware>
      <Meta title="Orders" desc="Check your orders, vip status and make new orders" />
      <Account active="orders">
        <Orders />
      </Account>
    </Middleware>
  );
}

export default OrdersPage;
