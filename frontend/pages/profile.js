import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Profile from '@components/Account/Content/Profile';
import Meta from '@components/Meta';

function ProfilePage() {
  return (
    <Middleware>
      <Meta title="Dashboard" desc="Check your orders, vip status and make new orders" />
      <Account active="profile">
        <Profile />
      </Account>
    </Middleware>
  );
}

export default ProfilePage;
