import styled from 'styled-components';
import { Title as GTitle, Text as GText } from '../General';

// ICON SOCIAL
import GitHubIcon from '../../public/assets/icon/GitHub.svg';
import MediumIcon from '../../public/assets/icon/Medium.svg';
import LinkedInIcon from '../../public/assets/icon/LinkedIn.svg';
import InstagramIcon from '../../public/assets/icon/Instagram.svg';

// SVG HYBEAR
import SigleTreeSVG from '../../public/assets/icon/H-Tree.svg';
import TreesRSVG from '../../public/assets/icon/H-TreesR.svg';
import RabbitHoleSVG from '../../public/assets/icon/H-RabbitHole.svg';
import LogoSVG from '../../public/assets/icon/H-Logo.svg';
import TreesLSVG from '../../public/assets/icon/H-TreesL.svg';
import FoxSVG from '../../public/assets/icon/H-Fox.svg';

export const GitHub = styled(GitHubIcon)`
  width: 2em;
`;
export const Medium = styled(MediumIcon)`
  width: 2em;
`;
export const LinkedIn = styled(LinkedInIcon)`
  width: 2em;
`;
export const Instagram = styled(InstagramIcon)`
  width: 2em;
`;

export const Content = styled.main`
  display: grid;
  grid-template:
    'profile artwork' auto
    'about artwork' 10vh
    'design development' 60vh / 50% 50%;
  overflow-x: hidden;
`;

export const Profile = styled.div`
  grid-area: profile;
  display: grid;
  align-items: center;
  grid-template-columns: auto 70%;
  border-bottom: solid 1px ${({ theme }) => theme.color.lightGrey};
  padding-bottom: 40px;
  margin: 40px;
  position: relative;
  z-index: 2;
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
      display: flex;
      align-items: center;
      margin: 10px 0;
      li {
        margin-right: 10px;
      }
    }
  }
`;

export const Artwork = styled.div`
  background: ${({ theme }) => theme.color.rawWhite};
  position: relative;
`;

export const BG = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;
  background: ${({ theme }) => theme.color.rawWhite};
  top: -5vw;
  right: -30vw;
  z-index: 1;
  mask-image: url('/assets/icon/H-BGMask.svg');
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: cover;
  &:after {
    content: '';
    background: linear-gradient(180deg, #091124 0, #0f1932);
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
  }
`;

export const BGStars = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

export const BGLight = styled.div`
  background: linear-gradient(180deg, rgba(12, 21, 45, 0) 20%, #09468b 60%, #006ead 100%);
  /* filter: invert(1); */
  height: 70%;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
`;

export const NatureGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const TreesL = styled(TreesLSVG)`
  width: 13%;
  position: absolute;
  right: 20%;
  bottom: 30%;
`;

export const RabbitHole = styled(RabbitHoleSVG)`
  width: 30%;
  position: absolute;
  right: 40%;
  bottom: 8%;
`;

export const Logo = styled(LogoSVG)`
  width: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
`;

export const Fox = styled(FoxSVG)`
  width: 20%;
  position: absolute;
  bottom: 0;
  left: 5%;
`;

export const TreesR = styled(TreesRSVG)`
  width: 11%;
  position: absolute;
  left: 15%;
  bottom: 20%;
`;

export const SingleTree = styled(SigleTreeSVG)`
  width: 5%;
  position: absolute;
  right: 10%;
  bottom: 20%;
`;

export const AboutProject = styled.div`
  margin: 0 40px;
`;

export const Title = styled(GTitle)`
  text-align: left;
  font-family: 'QuadraSans-Bold';
  color: ${({ theme }) => theme.color.blue};
  margin-bottom: 20px;
`;

export const Text = styled(GText)``;

export const Design = styled.div``;
export const Development = styled.div``;
