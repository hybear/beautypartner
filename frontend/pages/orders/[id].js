import React from 'react';
import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Order from '@components/Account/Content/Orders/Order';
import Meta from '@components/Meta';
import PopUp from '@components/General/PopUp';

const OrdersPage = props => {
  return (
    <Middleware>
      <Meta title="Orders" desc="Check your orders, vip status and make new orders" />
      <PopUp />
      <Account active="orders">
        <Order id={props.query.id} />
      </Account>
    </Middleware>
  );
};

export default OrdersPage;
