import styled from 'styled-components';

const Input = styled.input`
  display: block;
  background: ${({ theme }) => theme.color.white};
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
  font-size: 1em;
  padding: 10px;
  color: ${({ theme }) => theme.color.grey};
  margin-top: 5px;
  width: 100%;

  ${({ checked }) =>
    !checked &&
    `&:focus {
        background: rgba(244, 123, 81, 0.05);
        box-shadow: inset 0px 1px 3px 0px rgba(244, 123, 81, 0.35);
    }`}
  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }

  ${props =>
    props.checked &&
    `background: rgba(30, 144, 95, 0.25);
    box-shadow: inset 0px 1px 3px 0px rgba(70, 164, 124, 0.35);
    `}

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.color.lightGrey};
  }
`;

export default Input;
