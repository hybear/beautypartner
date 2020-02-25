import styled from 'styled-components';

const Text = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  font-family: ${({ bold }) => (bold ? 'QuadraSans-Bold' : 'QuadraSans-Regular')};
  font-style: ${({ italic }) => (italic ? italic : 'initial')};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`;
export default Text;
