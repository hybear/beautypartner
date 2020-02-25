import styled from 'styled-components';
import { Text as GText } from '../General';
import { Info, Form as GForm, Button as GButton } from '../General/Form';
import { Logo as BrandLogo } from '../../public/assets/icon/Logo.svg';

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled(GForm)`
  ${({ theme }) => theme.media.tablet`
    padding: 0 20px;
  `}
`;

export const Text = styled(GText)`
  display: block;
  text-align: center;
`;

export const Logo = styled(BrandLogo)`
  width: 15em;
  height: 15em;
  margin-bottom: 40px;
`;

export const Error = styled(Info)`
  font-size: 1em;
  text-align: center;
  font-family: 'QuadraSans-Bold', sans-serif;
  margin: 0 0 10px;
`;

export const SignInContainer = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100vh;
  width: 100%;
  ${({ theme }) => theme.media.tablet`
      grid-template-columns: 100%;
      grid-template-rows: 10% auto;
  `}
`;

export const BGImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Button = styled(GButton)`
  margin: 20px auto 10px;
  max-width: 50%;
`;
