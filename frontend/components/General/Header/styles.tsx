import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  min-height: 60px;
  position: fixed;
  z-index: 2;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
`;
