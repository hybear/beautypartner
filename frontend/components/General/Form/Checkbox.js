import styled from 'styled-components';

const CheckboxStyles = styled.input`
  cursor: pointer;
  & + label {
    cursor: pointer;
  }
`;

const Checkbox = props => <CheckboxStyles type="checkbox" {...props} />;

export default Checkbox;
