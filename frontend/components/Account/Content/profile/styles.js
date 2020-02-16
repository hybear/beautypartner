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
`;

export const Profile = styled.div`
  background: ${({ theme }) => theme.color.lightGrey};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.color.grey};
  box-shadow: inset 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-area: profile;
  ${props => !props.handleProfile && `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`};
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
  }
`;

export const Button = styled(GButton)`
  ${({ profile }) => profile && `margin: 20px 10px 0 15px;`}
`;
