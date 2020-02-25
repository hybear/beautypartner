import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem auto;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: 10px;
  width: fit-content;
  ${({ theme }) => theme.media.tablet`
      width: 100%;
  `}
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${({ theme }) => theme.color.lightGrey};
    &:last-child {
      border-right: 0;
    }
    ${({ theme }) => theme.media.tablet`
      padding: 15px 10px;
    `}
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
