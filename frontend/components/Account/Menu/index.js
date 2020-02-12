import { useContext } from 'react';
import { Me } from '../../Middleware';
import { Drawer, AvatarContainer, Avatar, Balance, List, ListItem, SignOutContainer } from './styles';
import Link from 'next/link';
import formatMoney from '../../../lib/formatMoney';

// UI
import SignOut from '../../SignOut';

const Menu = () => {
  const User = useContext(Me);
  return (
    <Drawer>
      <AvatarContainer>
        {console.log(User.info)}
        <span className="avatar">
          <Avatar />
          <p className="avatar__name">
            <small>Hello,</small>
            {User.info.name.split(' ')[0]}
          </p>
        </span>
      </AvatarContainer>
      <Balance>
        <small>Balance</small>
        {User.info.balance != null ? formatMoney(User.info.balance) : '$0,00'}
      </Balance>
      <List>
        <ListItem>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </ListItem>
      </List>
      <SignOutContainer>
        <SignOut />
      </SignOutContainer>
    </Drawer>
  );
};

export default Menu;
