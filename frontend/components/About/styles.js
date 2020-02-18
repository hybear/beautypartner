import styled from 'styled-components';

export const Content = styled.main`
  display: grid;
  grid-template:
    'profile artwork' auto
    'about artwork' 10vh
    'design development' 60vh / 60% 40%;
  padding: 40px;
`;

export const Profile = styled.div`
  grid-area: profile;
  display: grid;
  align-items: center;
  grid-template-columns: 25% 75%;
  border-bottom: solid 1px ${({ theme }) => theme.color.lightGrey};
  padding-bottom: 40px;
  .picture {
    margin: 0 auto;
    max-height: 180px;
    max-width: 180px;
    border-radius: 100px;
    object-fit: cover;
  }
  .content {
    margin-left: 20px;
    &__sub {
      font-size: 1em;
      i {
        color: ${({ theme }) => theme.color.primary};
      }
    }
    &__name {
      font-size: 1.875em;
      color: ${({ theme }) => theme.color.primary};
      font-family: 'QuadraSans-Bold', sans-serif;
      margin: 5px 0 10px;
      small {
        font-size: 0.5em;
        font-family: 'QuadraSans-Regular', sans-serif;
      }
    }
    &__shortinfo {
      font-size: 1em;
    }
    &__social {
    }
  }
`;

export const Artwork = styled.div``;
export const About = styled.div``;
export const Design = styled.div``;
export const Development = styled.div``;
