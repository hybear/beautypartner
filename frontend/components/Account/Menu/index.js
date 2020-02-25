import { useContext, useRef } from 'react';
import { Me } from '../../Middleware';
import {
  Drawer,
  AvatarContainer,
  Avatar,
  Balance,
  List,
  ListItem,
  TabProfile,
  TabOrders,
  TabNewOrder,
  SignOutContainer,
} from './styles';
import Link from 'next/link';
import formatMoney from '../../../lib/formatMoney';

// UI
import SignOut from '../../SignOut';

const Menu = props => {
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
        <ListItem active={props.active == 'profile'}>
          <Link href="/profile">
            <a>
              <TabProfile />
              Profile
            </a>
          </Link>
        </ListItem>
        <ListItem active={props.active == 'orders'}>
          <Link href="/orders">
            <a>
              <TabOrders />
              Orders
            </a>
          </Link>
        </ListItem>
        <ListItem active={props.active == 'products'}>
          <Link href="/products">
            <a>
              <TabNewOrder />
              Products
            </a>
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
