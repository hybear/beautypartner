import styled from 'styled-components';

export const Content = styled.div`
  grid-area: cont;
  margin: 0 0 0 40px;
  padding-top: 40px;
  /* padding: 1em 1em 0; */
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 2em;
  font-family: 'QuadraSans-Bold';
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 20px;
`;
