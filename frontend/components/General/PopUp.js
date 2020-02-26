import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation, useQuery } from 'react-apollo';

const LOCAL_STATE_QUERY = gql`
  query {
    popUp @client
  }
`;

const TOGGLE_POPUP_MUTATION = gql`
  mutation {
    togglePopUp @client
  }
`;

const PopUpStyles = styled.span`
  /* width: 300px; */
  padding: 15px 50px 15px 25px;
  font-size: 1em;
  border-radius: 0.2em;
  background-image: linear-gradient(135deg, #ff6fd8 10%, #3813c2 100%);
  color: ${({ theme }) => theme.color.rawWhite};
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 20;
  ${({ open }) => !open && 'display: none;'}
  ${({ theme }) => theme.media.tablet`
      width: 90%;
      top: 10px;
      bottom: initial;
  `}
  a {
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
  strong {
    font-family: 'QuadraSans-Bold', sans-serif;
  }
`;

export const CloseButton = styled.span`
  color: ${({ theme }) => theme.color.rawWhite};
  font-size: 2em;
  line-height: initial;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 50%;
  padding: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const PopUp = () => {
  const [togglePopUp] = useMutation(TOGGLE_POPUP_MUTATION, {
    refetchQueries: [
      {
        query: LOCAL_STATE_QUERY,
      },
    ],
  });
  const { data, loading, error } = useQuery(LOCAL_STATE_QUERY);

  return (
    <PopUpStyles open={data.popUp}>
      <Link href="/about">
        <a>
          Meet <strong>the artisan</strong> behind this project
        </a>
      </Link>
      <CloseButton onClick={togglePopUp}>&times;</CloseButton>
    </PopUpStyles>
  );
};

export default PopUp;
export { LOCAL_STATE_QUERY, TOGGLE_POPUP_MUTATION };
