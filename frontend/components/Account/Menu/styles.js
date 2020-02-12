import styled from 'styled-components';
import { Avatar as IAvatar } from '../../../public/assets/icon/Avatar.svg';

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
  padding-top: 40px;
  background: #fafafa;
  border-right: solid 1px ${({ theme }) => theme.color.lightGrey};
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
`;

export const ListItem = styled.li`
  background: ${({ theme, active }) => (active ? theme.color.primary : 'transparent')};
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
  grid-area: 'balance';
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
`;

export const SignOutContainer = styled.div`
  grid-area: signout;
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
