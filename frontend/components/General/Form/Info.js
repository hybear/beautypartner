import styled from 'styled-components';

const Info = styled.span`
  font-size: 0.875em;
  color: ${props => props.theme.color.error};
  margin-top: 5px;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  b {
    font-family: 'QuadraSans-Bold';
  }
  ul,
  li {
    list-style: initial;
    color: inherit;
    margin: 0 0 0 10px;
    line-height: 1.25em;
    color: ${props => props.theme.color.grey};
  }

  .set-success {
    display: none;
  }
`;

export default Info;
