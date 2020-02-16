import styled from 'styled-components';
import { Button } from '../../../General/Form';

export const StripeButtonStyles = styled(Button)`
  background: linear-gradient(135deg, #5533ff 10%, #25ddf5 100%);
  font-family: inherit;
  font-size: 1em;
  display: flex;
  justify-content: center;
  box-shadow: inset 0px 2px 10px 0px rgba(0, 0, 0, 0.35);
  span {
    display: flex;
    svg {
      padding: 10px;
      width: 5.25em;
      path {
        fill: ${({ theme }) => theme.color.white};
      }
    }
  }
  &:hover {
    filter: brightness(120%);
  }
`;
