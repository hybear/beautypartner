import Account from '@components/Account';
import Middleware from '@components/Middleware';
import Profile from '@components/Account/Content/Profile';

function HomePage() {
  return (
    <Middleware>
      <Account>
        <Profile />
      </Account>
    </Middleware>
  );
}

export default HomePage;
