import React, { useContext, useEffect, useState } from 'react';
import { Me } from '../../Middleware';
import Link from 'next/link';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../User';

const UPDATE_AVATAR = gql`
  mutation UPDATE_AVATAR($id: ID!, $avatar: String!) {
    updateAvatar(id: $id, avatar: $avatar) {
      id
      avatar
    }
  }
`;

// Avatars
import Avatar1 from '../../../public/assets/icon/Peep1.svg';
import Avatar2 from '../../../public/assets/icon/Peep2.svg';
import Avatar3 from '../../../public/assets/icon/Peep3.svg';
import Avatar4 from '../../../public/assets/icon/Peep4.svg';
import Avatar5 from '../../../public/assets/icon/Peep5.svg';
import Avatar6 from '../../../public/assets/icon/Peep6.svg';
import Avatar7 from '../../../public/assets/icon/Peep7.svg';
import Avatar8 from '../../../public/assets/icon/Peep8.svg';
import Avatar9 from '../../../public/assets/icon/Peep9.svg';
import Avatar10 from '../../../public/assets/icon/Peep10.svg';
import Avatar11 from '../../../public/assets/icon/Peep11.svg';
import Avatar12 from '../../../public/assets/icon/Peep12.svg';

// UI
import {
  AvatarContainer,
  Balance,
  ChangeAvatar,
  CloseButton,
  Drawer,
  EditButton,
  List,
  ListItem,
  SignOutContainer,
  TabProfile,
  TabOrders,
  TabNewOrder,
} from './styles';
import Button from '../../General/Form/Button';
import SignOut from '../../SignOut';

const Menu = props => {
  const User = useContext(Me);
  const [EditAvatar, setEditAvatar] = useState(false);

  console.log(User.info.avatar);
  // Object.entries(Avatars).map(([k, v]) => (k == User.info.avatar ? console.log(k) : ''));

  const [Avatar, setAvatar] = useState({ value: <div></div>, id: '1' });

  let Avatars = {
    '1': <Avatar1 />,
    '2': <Avatar2 />,
    '3': <Avatar3 />,
    '4': <Avatar4 />,
    '5': <Avatar5 />,
    '6': <Avatar6 />,
    '7': <Avatar7 />,
    '8': <Avatar8 />,
    '9': <Avatar9 />,
    '10': <Avatar10 />,
    '11': <Avatar11 />,
    '12': <Avatar12 />,
  };

  const getAvatar = Av => {
    setAvatar({ value: Avatars[Av], id: Av });

    return Avatars[Av] || Avatars['1'];
  };

  const [updateProfile, { loading }] = useMutation(UPDATE_AVATAR, {
    refetchQueries: [
      {
        query: CURRENT_USER_QUERY,
      },
    ],
    onCompleted: () => setEditAvatar(!EditAvatar),
  });

  useEffect(() => {
    getAvatar(User.info.avatar);
  }, []);

  return (
    <Drawer>
      <AvatarContainer>
        {console.log(User.info)}
        <ChangeAvatar EditAvatar={`edit-${EditAvatar}`}>
          <CloseButton onClick={() => setEditAvatar(!EditAvatar)}>&times;</CloseButton>
          <ul className="list">
            {Object.entries(Avatars).map((Av, i) => (
              <li
                className={`list__item ${Av[0] == Avatar.id && 'set--active'}`}
                key={i}
                onClick={() => getAvatar(Av[0])}
              >
                {Av[1]}
              </li>
            ))}
          </ul>
          <Button
            primary
            onClick={() => updateProfile({ variables: { id: User.info.id, avatar: Avatar.id } })}
            disabled={loading || Avatar.id == User.info.avatar}
          >
            Sav{loading ? 'ing' : 'e'} Avatar
          </Button>
        </ChangeAvatar>
        <span className="avatar">
          <span className="avatar__image">
            {Avatar.value}
            <EditButton primary onClick={() => setEditAvatar(!EditAvatar)} />
          </span>
          <p className="avatar__name">
            <small>Hello,</small>
            {User.info.name.split(' ')[0]}
          </p>
        </span>
      </AvatarContainer>
      <Balance>
        <small>Balance</small>
        {User.info.balance != null ? `$${User.info.balance.toFixed(2)}` : '$0,00'}
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
