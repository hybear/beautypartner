import styled from 'styled-components';
import { Text as GText } from '../General';
import { Logo as BrandLogo } from '../../public/assets/icon/Logo.svg';
import { Form as GForm, Button as GButton } from '../General/Form';

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled(GForm)``;

export const Text = styled(GText)`
  display: block;
  text-align: center;
`;

export const Logo = styled(BrandLogo)`
  width: 15em;
  height: 15em;
  margin-bottom: 40px;
`;

export const Button = styled(GButton)`
  margin: 20px auto 10px;
  max-width: 50%;
`;
