import styled from 'styled-components';

const Button = styled.button`
  padding: 1em;
  color: ${props => (props.primary ? props.theme.color.rawWhite : props.theme.color.secondary)};
  background: ${props => (props.primary ? props.theme.color.primary : 'transparent')};
  ${props => !props.primary && `border: solid 1px ${props.theme.color.secondary}`};
  text-align: center;
  display: ${props => (props.fullWidth ? 'block' : 'inline-block')};
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
  /* margin: ${props => !props.fullWidth && '20px auto 10px'}; */
  border-radius: 0.2em;
  transition: all 0.2s;
  font-size: 1em;
  cursor: pointer;

  ${props =>
    !props.primary &&
    `&:not([disabled]) {
      &:hover,
      &:active {
        background-color: rgba(147, 132, 81, .25)
      }
    }`}
  ${props =>
    props.primary &&
    `&:not([disabled]) {
      &:hover,
      &:active {
        transform: translateY(-2px);
        filter: brightness(110%);
        box-shadow: 0px 0px 15px 2px rgba(244, 123, 81, .55), 0px 4px 5px 0px rgba(0,0,0,0.10), 0px 0px 10px 0px rgba(244, 123, 81, .7);
      }
    }
  `};

  &:disabled {
    cursor: not-allowed;
    color: ${props => props.primary && props.theme.color.white};
    background-color: ${props => props.primary && props.theme.color.primary};
    opacity: 0.5;
  }
`;

export default Button;
