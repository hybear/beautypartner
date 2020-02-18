import styled from 'styled-components';
import Text from '../Text';

export const CardStyles = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.2s;
  &:hover {
    border: 1px solid white;
    box-shadow: ${({ theme }) => theme.misc.bs};
    transform: translateY(-5px);
  }

  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.color.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    justify-content: space-between;
    background: ${({ theme }) => theme.color.lightgrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1em;
      padding: 1em;
      text-align: center;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  padding: 15px;
`;

export const Title = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  display: block;
  line-height: 1.1;
  font-size: 1em;
  overflow: hidden;
  height: 1em;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  padding: 0 1rem;
`;

export const Description = styled(Text)`
  margin-bottom: 10px;
  max-height: 50px;
  font-size: 0.875em;
  color: ${({ theme }) => theme.color.grey};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  -webkit-line-clamp: 2;
`;

export const AddToCart = styled.div`
  margin: 10px 10px 15px;
  opacity: ${({ hover }) => (hover ? '1' : '0')};
  transition: all 0.2s;
`;

export const PriceTag = styled.span`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 5px;
  line-height: 1;
  font-size: 1.25em;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Secundary = styled.button``;
