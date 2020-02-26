import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.5em;
  margin: 20px 0 40px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
`;

export default Title;
