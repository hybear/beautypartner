import Account from '@components/Account';
import Middleware from '@components/Middleware';

function HomePage() {
  return (
    <Middleware>
      <Account />
    </Middleware>
  );
}

export default HomePage;
