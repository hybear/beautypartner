import styled from 'styled-components';
import { Title } from '../../styles';
import { Button } from '../../../../General/Form';

export const OrderStylesContainer = styled.div`
  overflow: hidden;
`;

export const OrderTotal = styled.p`
  font-size: 1.1em;
  margin: 0 0 15px;
`;
export const OrderTitle = styled(Title)`
  /* display: grid;
  grid-template-columns: repeat(5, auto);
  text-align: center; */
  font-size: 1.5em;
  ${({ theme }) => theme.media.tablet`
    padding-top: 20px;
  `}
`;
export const OrderStyles = styled.li`
  margin: 10px 0;
  padding: 20px;
  display: block;
  background: ${({ theme }) => theme.color.lightGrey};
  box-shadow: inset 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  ${({ theme }) => theme.media.tablet`
    padding: 10px;
  `}
`;

export const OrderInfo = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(4, auto);
  transition: all 0.2s;
  text-align: center;
  color: ${({ theme }) => theme.color.grey};
  text-decoration: none;
  padding-top: 20px;

  .title {
    font-family: 'QuadraSans-Bold', sans-serif;
    margin-bottom: 10px;
    font-size: 1.25em;
  }

  .content {
    &.cashbackVal {
      small {
        display: block;
        background: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.white};
        padding: 0.1em 0;
        border-radius: 2px;
      }
    }
  }
`;

export const OrderItems = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(5, auto);
  margin-top: 20px;
  background: ${({ theme }) => theme.color.white};
  padding: 10px;
  border-radius: 0.2em;
  grid-gap: 20px;
  overflow-y: hidden;
  overflow-x: auto;
  .title {
    text-align: center;
    font-family: 'QuadraSans-Bold', sans-serif;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.grey};
  }
  .item {
    display: contents;
    margin-top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.color.grey};
    &__picture {
      max-width: 60px;
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
