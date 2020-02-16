import styled from 'styled-components';
import { Text as GText } from '../General';
import { Form as GForm, Button as GButton, Info } from '..//General/Form';

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Error = styled(Info)`
  font-size: 1em;
  text-align: center;
  font-family: 'QuadraSans-Bold', sans-serif;
  margin: 0 0 10px;
`;

export const Form = styled(GForm)``;

export const Text = styled(GText)`
  display: block;
  text-align: center;
`;
export const Button = styled(GButton)`
  margin: 20px auto 10px;
  max-width: 50%;
`;
