import styled from 'styled-components';

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template:
    'nav cont figures' 100vh
    / 15% 60% auto;
  overflow: hidden;

  ${({ theme }) => theme.media.tablet`
    grid-template:
        'nav' auto
        'cont' auto
        'figures' auto / auto;
        padding-bottom: 40px;
  `}
`;
