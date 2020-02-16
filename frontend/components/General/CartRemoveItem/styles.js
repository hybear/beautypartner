import styled from 'styled-components';
import { Button as GButton } from '../Form';

const CartRemoveItemStyles = styled(GButton)`
  grid-area: removeItem;
  && {
    font-size: 1.5em;
    border: none;
    line-height: 0.75em;
    border-radius: 1em;
    display: flex;
    padding: 5px;
    min-width: initial;
    position: absolute;
    top: 10px;
    right: 5px;
  }
`;

export default CartRemoveItemStyles;
