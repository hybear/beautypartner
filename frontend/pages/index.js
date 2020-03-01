import React from 'react';
import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Profile from '@components/Account/Content/Profile';
import Meta from '@components/Meta';
import PopUp from '@components/General/PopUp';

const HomePage = () => {
  return (
    <Middleware>
      <Meta title="Dashboard" desc="Check your orders, vip status and make new orders" />
      <PopUp />
      <Account active="profile">
        <Profile />
      </Account>
    </Middleware>
  );
};

export default HomePage;
