import styled from 'styled-components';

export const FigureContainer = styled.div`
  grid-area: figures;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  mask-image: url('/assets/icon/MaskAccount.svg');
  mask-position: center;
  mask-repeat: no-repeat;
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;
