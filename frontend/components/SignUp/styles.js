import styled from 'styled-components';
import { Text as GText } from '../General';
import { Logo as BrandLogo } from '../../public/assets/icon/Logo.svg';

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
