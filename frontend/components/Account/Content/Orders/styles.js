import styled from 'styled-components';
import { Title } from '../styles';
import { Button } from '../../../General/Form';

export const OrderStylesContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const OrderTotal = styled.p`
  font-size: 1.1em;
  margin: 0 0 15px;
`;
export const OrderListTitle = styled.div`
  /* display: grid;
  grid-template-columns: repeat(5, auto);
  text-align: center; */
`;
export const OrderStyles = styled.li`
  margin: 10px 0;
  .order {
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(5, auto);
    padding: 20px;
    transition: all 0.2s;
    text-align: center;
    border: solid 1px ${({ theme }) => theme.color.lightGrey};
    cursor: pointer;
    color: ${({ theme }) => theme.color.grey};
    text-decoration: none;
    &:hover {
      border: solid 0 ${({ theme }) => theme.color.lightGrey};
      box-shadow: ${({ theme }) => theme.misc.bs};
      transform: translateY(-3px);
    }

    .order__title {
      font-family: 'QuadraSans-Bold', sans-serif;
      margin-bottom: 10px;
    }

    .order__info {
      &.cashback {
        small {
          display: block;
          background: ${({ theme }) => theme.color.primary};
          color: ${({ theme }) => theme.color.white};
          padding: 0.1em 0;
          border-radius: 2px;
        }
      }
    }
  }
`;

export const OrderButton = styled(Button)`
  a {
    color: ${({ theme }) => theme.color.white};
    &:hover {
      text-decoration: none;
    }
  }
`;

export const OrderList = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 20px;
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
