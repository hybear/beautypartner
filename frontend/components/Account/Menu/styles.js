import styled from 'styled-components';
import { EditButton as Edit } from '../../General';

// import { Avatar as IAvatar } from '../../../public/assets/icon/Avatar.svg';
import TabProfileIcon from '../../../public/assets/icon/Tab-Profile.svg';
import TabOrdersIcon from '../../../public/assets/icon/Tab-Orders.svg';
import TabNewOrderIcon from '../../../public/assets/icon/Tab-NewOrder.svg';

export const Drawer = styled.div`
  grid-area: nav;
  width: 100%;
  display: grid;
  grid-template:
    'avatar' 20%
    'balance' 8%
    'list' auto
    'signout' 5%
    / 100%;
  grid-row-gap: 1em;
  background: #fafafa;
  border-right: solid 1px ${({ theme }) => theme.color.lightGrey};
  position: relative;

  ${({ theme }) => theme.media.tablet`
    grid-template:
      'avatar' 200px
      'balance' auto
      / 100%;
    padding-bottom: 20px;
    border-right: none;
    position: initial;
    background: ${({ theme }) => theme.color.rawWhite};
  `}
`;

export const AvatarContainer = styled.div`
  grid-area: avatar;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .avatar {
    display: grid;
    grid-template-columns: 40% 60%;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.primary};
    width: 100%;
    height: 100%;
    .avatar__image {
      align-items: flex-end;
      height: 100%;
      display: flex;
      position: relative;
      &:before {
        content: '';
        width: 90%;
        height: 50%;
        border-radius: 0.2em;
        background: ${({ theme }) => theme.color.white};
        position: absolute;
        display: block;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      svg {
        width: 100%;
        height: initial;
        max-height: 100px;
        position: relative;
        ${({ theme }) => theme.media.tablet`
          max-height: 150px;
        `}
      }
    }
    .avatar__name {
      display: flex;
      flex-flow: column;
      font-family: 'QuadraSans-Bold', sans-serif;
      font-size: 1.5em;
      padding: 0 5px;
      align-self: center;
      ${({ theme }) => theme.media.tablet`
        font-size: 2em;
      `}
      small {
        font-family: 'QuadraSans-Regular', sans-serif;
        font-size: 0.7em;
      }
    }
  }
`;

export const ChangeAvatar = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  transform: ${props => (props.EditAvatar == 'edit-true' ? 'translateX(0)' : 'translateX(-100%)')};
  transition: all 0.3s cubic-bezier(0.27, 0.91, 0.38, 1.02);
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-flow: column;
  ${({ theme }) => theme.media.tablet`
      position: fixed;
      font-size: 1.25em;
  `}
  .list {
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3 - 10px));
    grid-auto-rows: min-content;
    grid-gap: 5px;
    justify-content: center;
    background: ${({ theme }) => theme.color.white};
    border-radius: 0.2em;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: ${({ theme }) => theme.color.white};
    }

    &::-webkit-scrollbar {
      width: 0.5em;
      background-color: ${({ theme }) => theme.color.white};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${({ theme }) => theme.color.lightGrey};
    }
    .list__item {
      &.set--active {
        border: solid 1px ${({ theme }) => theme.color.primary};
      }
      svg {
        height: 60px;
        width: 100%;
      }
      border-radius: 0.2em;
      &:hover {
        border: solid 1px ${({ theme }) => theme.color.primary};
        cursor: pointer;
      }
    }
  }
`;

export const CloseButton = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: 2.5em;
  line-height: 0.5em;
  padding: 20px;
  display: inline-flex;
  border: 0;
  z-index: 2;
  cursor: pointer;
  align-self: flex-end;
`;

export const EditButton = styled(Edit)`
  color: ${props => props.theme.color.primary};
  background: ${props => props.theme.color.rawWhite};
  position: absolute;
  padding: 10px;
  top: initial;
  bottom: 5px;
  right: -2em;
  height: 2em;
  width: 2em;
  padding: 0.5em;

  ${({ theme }) => theme.media.tablet`
    bottom: 10px;
    right: -2.5em;
    height: 2.5em;
    width: 2.5em;
  `}
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${props => props.theme.color.primary};
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
  font-size: 1em;
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

export const Avatar = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2em;
  display: flex;
  /* min-height: 6rem;
  min-width: 6rem; */
  overflow: hidden;
`;

export const Balance = styled.span`
  grid-area: balance;
  align-items: flex-end;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 0.2em;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-flow: column;
  font-size: 1em;
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
    font-size: 1.25em;
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
