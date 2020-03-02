import styled from 'styled-components';
import { Title as GTitle } from '../../General';

export const Content = styled.div`
  grid-area: cont;
  margin: 20px 0;
  padding: 0 20px 0;
  overflow: auto;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.white};
  }

  &::-webkit-scrollbar {
    width: 0.5em;
    background-color: ${({ theme }) => theme.color.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.lightGrey};
  }

  ${({ theme }) => theme.media.tablet`
      margin: 20px 0 80px;
  `}
`;

export const Title = styled(GTitle)`
  text-align: initial;
  font-size: 1.875em;
  font-family: 'QuadraSans-Bold';
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 10px;
`;
