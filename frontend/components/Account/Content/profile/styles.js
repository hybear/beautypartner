import styled from 'styled-components';
import { Text } from '../../../General';
import { Button as GButton } from '../../../General/Form';

export const ProfileContainer = styled.div`
  align-items: start;
  display: grid;
  grid-template:
    'title title' auto
    'profile password' auto
    / 60% 1fr;
  grid-gap: 0 20px;
  ${({ theme }) => theme.media.tablet`
    grid-template:
      'title' auto
      'profile' auto
      'password' auto
      / 100%;
      grid-gap: 20px;
      margin-bottom: 20px;
  `}
`;

export const VIPContainer = styled.div``;

export const BadgesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, calc(100% / 6));
  grid-auto-rows: min-content;
  grid-gap: 5px;
  width: 60%;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
    grid-template-columns: repeat(4,minmax(calc(100% / 4), 100%));
    grid-gap: 5px;
    justify-content: center;
  `}
`;

export const Badge = styled.li`
  display: flex;
  svg {
    width: 100%;
    height: initial;
    filter: grayscale(1);
  }
`;

export const Profile = styled.div`
  background: ${({ theme }) => theme.color.lightGrey};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.color.grey};
  box-shadow: inset 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-area: profile;
  ${props => !props.handleProfile && `grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr))`};
  grid-gap: 5px;
  /* margin: 10px 0; */
  padding: 20px;
  position: relative;
  p {
    font-family: 'QuadraSans-Bold';
  }
`;

export const ProfileItem = styled.span`
  margin: 5px;
  overflow-wrap: break-word;

  p {
    margin-bottom: 5px;
    font-size: 1.2em;
  }
`;

export const Password = styled.div`
  form {
    align-items: start;
    display: grid;
    grid-template: 'email email' auto;
    grid-gap: 10px;
  }
`;

export const EmailReset = styled(Text)`
  grid-area: email;
  color: ${({ theme, success }) => success && theme.color.success};
  b {
    font-family: 'QuadraSans-Bold';
  }
`;

export const PasswordContainer = styled.div`
  grid-area: password;
  max-width: 30rem;
  padding: 20px;
  /* margin: 10px 0; */
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.color.lightGrey};
  box-shadow: inset 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.color.grey};
  position: relative;
  > p {
    font-family: 'QuadraSans-Bold';
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

export const Button = styled(GButton)`
  ${({ profile }) => profile && `margin: 20px 10px 0 0;`}
`;
