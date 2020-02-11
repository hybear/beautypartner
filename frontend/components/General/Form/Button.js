import styled from 'styled-components';

const Button = styled.button`
  padding: 20px;
  color: ${props => (props.primary ? props.theme.color.rawWhite : props.theme.color.secundary)};
  background: ${props => (props.primary ? props.theme.color.primary : props.theme.color.secundary)};
  ${props => !props.primary && `border: solid 1px ${props.theme.color.secundary}`};
  text-align: center;
  width: 50%;
  display: block;
  margin: 20px auto 10px;
  border-radius: 0.2em;
  transition: all 0.2s;
  cursor: not-allowed;
  font-size: 1em;
  &:not([disabled]) {
    &:hover,
    &:active {
      cursor: pointer;
      transform: translateY(-2px);
      filter: brightness(110%);
      box-shadow: ${props =>
        props.primary &&
        '0px 0px 15px 2px rgba(244, 123, 81, .55), 0px 4px 5px 0px rgba(0,0,0,0.10), 0px 0px 10px 0px rgba(244, 123, 81, .7)'};
    }
  }
  &:disabled {
    color: ${props => props.primary && props.theme.color.white};
    background-color: ${props => props.primary && props.theme.color.primary};
    opacity: 0.5;
  }
`;

export default Button;
