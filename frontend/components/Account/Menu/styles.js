import styled from 'styled-components';
import { Avatar as IAvatar } from '../../../public/assets/icon/Avatar.svg';
import TabProfileIcon from '../../../public/assets/icon/Tab-Profile.svg';
import TabOrdersIcon from '../../../public/assets/icon/Tab-Orders.svg';
import TabNewOrderIcon from '../../../public/assets/icon/Tab-NewOrder.svg';

export const Drawer = styled.div`
  grid-area: nav;
  width: 100%;
  display: grid;
  grid-template:
    'avatar' 15%
    'balance' 8%
    'list' auto
    'signout' 5%
    / 100%;
  grid-row-gap: 1em;
  padding-top: 20px;
  background: #fafafa;
  border-right: solid 1px ${({ theme }) => theme.color.lightGrey};

  ${({ theme }) => theme.media.tablet`
    grid-template:
      'avatar' auto
      'balance' auto
      / 100%;
    padding-bottom: 20px;
    border-right: none;
  `}
`;

export const AvatarContainer = styled.div`
  grid-area: avatar;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  .avatar {
    align-items: center;
    display: flex;
    margin-left: 1.5em;
    color: ${({ theme }) => theme.color.grey};
    .avatar__name {
      display: flex;
      flex-flow: column;
      font-family: 'QuadraSans-Bold', sans-serif;
      font-size: 1.875rem;
      margin-left: 10px;
      small {
        font-family: 'QuadraSans-Regular', sans-serif;
        font-size: 0.75em;
      }
    }
  }
`;

export const List = styled.ul`
  grid-area: list;
  ${({ theme }) => theme.media.tablet`
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    text-align: center;
  `}
`;

export const ListItem = styled.li`
  background: ${({ theme, active }) => (active ? theme.color.primary : theme.color.lightGrey)};
  font-size: 1.25em;
  padding: 10px 20px;
  border-bottom: solid 1px ${({ theme }) => theme.color.white};
  cursor: pointer;
  a {
    color: ${({ theme, active }) => (active ? theme.color.white : theme.color.grey)};
    display: flex;
    align-items: center;
    &:hover {
      text-decoration: none;
    }
  }
  svg {
    width: 1.5em;
    transition: all 0.2s;
    fill: ${({ theme, active }) => (active ? theme.color.white : theme.color.grey)};
    margin-right: 5px;
  }

  ${({ theme }) => theme.media.tablet`
      width: 100%;
      padding: 5px 20px;
      font-size: 1em;
      transition: all .2s;
      border-right: solid 1px ${({ theme }) => theme.color.white};
      box-shadow: ${({ active }) => (active ? 'inset 0px 1px 3px 0px rgba(0, 0, 0, 0.15)' : '')};
      a{
        flex-flow: column;
      }
      svg{
        display: block;
        margin: 5px auto;
      }
      &:nth-child(1){
        border-radius: .5em 0 0 0;
      }
      &:nth-last-child(1){
        border-radius: 0 .5em 0 0;
      }
  `}
`;

export const Avatar = styled(IAvatar)`
  background: ${({ theme }) => theme.color.white};
  border-radius: 60px;
  display: flex;
  min-height: 6rem;
  min-width: 6rem;
  overflow: hidden;
  box-shadow: inset 2px 3px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

export const Balance = styled.span`
  grid-area: balance;
  align-items: flex-end;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 0.2em;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-flow: column;
  font-size: 1.25rem;
  font-family: QuadraSans-Bold;
  justify-content: center;
  left: -50%;
  position: relative;
  padding: 0 1.875rem;
  small {
    font-family: QuadraSans-Regular;
    font-size: 0.75em;
  }
  ${({ theme }) => theme.media.tablet`
    padding: 10px;
    width: 30%;
    left: -5%;
  `}
`;

export const TabProfile = styled(TabProfileIcon)``;
export const TabOrders = styled(TabOrdersIcon)``;
export const TabNewOrder = styled(TabNewOrderIcon)``;

export const SignOutContainer = styled.div`
  grid-area: signout;
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.media.tablet`
     position: absolute;
     bottom: 0;
     left: 50%;
     transform: translateX(-50%);
     margin-bottom: 80px;
  `}
`;
