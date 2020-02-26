import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Orders from '@components/Account/Content/Orders';
import Meta from '@components/Meta';
import PopUp from '@components/General/PopUp';

const OrdersPage = () => {
  return (
    <Middleware>
      <Meta title="Orders" desc="Check your orders, vip status and make new orders" />
      <PopUp />
      <Account active="orders">
        <Orders />
      </Account>
    </Middleware>
  );
};

export default OrdersPage;
