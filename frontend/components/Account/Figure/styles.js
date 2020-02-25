import styled, { keyframes } from 'styled-components';

export const FigureContainer = styled.div`
  grid-area: figures;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`;

const bright = keyframes`
  0% {
    filter: contrast(80%);
  }

  50% {
    filter: contrast(120%);
  }

  100% {
    filter: contrast(80%);
  }
`;

export const Image = styled.img`
  mask-image: url('/assets/icon/MaskAccount.svg');
  mask-position: right;
  mask-repeat: no-repeat;
  mask-size: cover;
  object-fit: cover;
  object-position: right;
  height: 100%;
  width: 100%;
  animation: ${bright} 3s linear infinite;
`;
