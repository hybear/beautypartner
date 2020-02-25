import styled, { keyframes } from 'styled-components';
import { Input } from '../Form';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px white;
  }

  to {
    box-shadow: 0 0 10px 1px white;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  /* ${({ theme }) => theme.breakpoints.down('sm')} {
    position: initial;
  } */
`;

export const Search = styled(Input)`
  display: flex;
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  /* border-bottom: 1px solid ${({ theme }) => theme.color.primary}; */
  border-radius: 0.2em;

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.7;
  }
  :-ms-input-placeholder {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
  &.loading {
    animation: ${glow} 0.5s ease-in-out infinite alternate;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  width: 100%;
  max-height: 30em;
  overflow-x: auto;
  z-index: 2;
  /* border: 1px solid ${props => props.theme.color.lightgrey}; */
  box-shadow: ${props => props.theme.misc.bs};
  border-radius: 0 0 5px 5px;

  /* ${({ theme }) => theme.breakpoints.down('sm')} {
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  } */
`;

export const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.primary};
  background: ${props => (props.highlighted ? props.theme.color.primary : 'white')};
  color: ${props => props.theme.color.black};
  cursor: pointer;
  padding: 1rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid ${props => (props.highlighted ? props.theme.color.primary : 'white')};
  img {
    margin-right: 10px;
  }
`;
