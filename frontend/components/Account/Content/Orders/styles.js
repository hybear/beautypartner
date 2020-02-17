import styled from 'styled-components';
import { Title } from '../styles';

export const OrderStylesContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const OrderTotal = styled.p`
  font-size: 1.1em;
  margin: 0 15px 20px;
`;

export const OrderList = styled.ul`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 40px;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.grey};
  }
`;
