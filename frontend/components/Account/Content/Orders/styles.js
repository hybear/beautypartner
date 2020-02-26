import styled from 'styled-components';
import { Title } from '../styles';
import { Button } from '../../../General/Form';

export const OrderStylesContainer = styled.div`
  height: 100%;
  padding-bottom: 20px;
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

    ${({ theme }) => theme.media.tablet`
      grid-template: 
      "idOrders idOrders" auto 
      "idValOrders idValOrders" auto 
      "statusOrders dateOrders" auto 
      "statusValOrders dateValOrders" auto 
      "totalOrders cashbackOrders" auto 
      "totalValOrders cashbackValOrders" auto 
      / auto;
      grid-gap: 10px;
  `}

    .order__title {
      font-family: 'QuadraSans-Bold', sans-serif;
      margin-bottom: 10px;
      ${({ theme }) => theme.media.tablet`
          &.idOrders {
            grid-area: idOrders;
          }
          &.statusOrders {
            grid-area: statusOrders;
          }
          &.dateOrders {
            grid-area: dateOrders;
          }
          &.totalOrders {
            grid-area: totalOrders;
          }
          &.cashbackOrders {
            grid-area: cashbackOrders;
          }
        margin-bottom: 0;
      `}
    }

    .order__info {
      &.cashbackValOrders {
        small {
          display: block;
          background: ${({ theme }) => theme.color.primary};
          color: ${({ theme }) => theme.color.white};
          padding: 0.1em 0;
          border-radius: 2px;
        }
      }
      ${({ theme }) => theme.media.tablet`
          &.idValOrders {
            grid-area: idValOrders;
          }
          &.statusValOrders {
            grid-area: statusValOrders;
          }
          &.dateValOrders {
            grid-area: dateValOrders;
          }
          &.totalValOrders {
            grid-area: totalValOrders;
          }
          &.cashbackValOrders {
            grid-area: cashbackValOrders;
          }
      `}
    }
  }
`;

export const OrderButton = styled(Button)`
  margin-bottom: 40px;
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

  ${({ theme }) => theme.media.tablet`
    margin-bottom: 10px;
  `}

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
