import styled from 'styled-components';
import { Button as GButton } from '../Form';

export const Button = styled(GButton)`
  && {
    padding: 15px;
    font-family: QuadraSans-Bold;
    letter-spacing: 0.1em;
  }
`;

export const CartStyles = styled.div`
  background: white;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  bottom: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(15%, 400px);
  height: 100%;
  padding: 10px;
  position: fixed;
  right: 0;
  transform: translateX(105%);
  transition: all 0.3s;
  top: 0;
  z-index: 20;
  ${({ open }) => open && `transform: translateX(0);`};
`;

export const CartItemList = styled.ul`
  max-height: 100%;
  overflow: auto;
`;

export const Total = styled.p`
  font-size: 1.25em;
  font-family: QuadraSans-Bold;
  margin-bottom: 10px;
  padding: 10px;
`;

export const CartItemStyles = styled.li`
  position: relative;
  display: grid;
  grid-template:
    'image title title' auto
    'image value value' auto
    /* "image total total" auto */
    / 30% 50% 20%;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
  padding: 20px 0;
  .image {
    max-width: 100%;
    grid-area: image;
  }
  .title {
    grid-area: title;
  }
  .listPrice {
    color: ${({ theme }) => theme.color.lightGrey};
    margin-left: 5px;
  }
  .bestPrice {
    margin-left: 5px;
  }
  .value {
    grid-area: value;
    display: flex;
  }
  .total {
    grid-area: total;
  }
`;

export const CloseButton = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: 3em;
  line-height: initial;
  border: 0;
  position: absolute;
  z-index: 2;
  cursor: pointer;
`;
