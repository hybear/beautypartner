import styled, { keyframes } from 'styled-components';
import { Title as GTitle, Text as GText } from '../General';

import ClawEffect from '../../public/assets/icon/Claw.svg';

// ICON SOCIAL
import GitHubIcon from '../../public/assets/icon/GitHub.svg';
import MediumIcon from '../../public/assets/icon/Medium.svg';
import LinkedInIcon from '../../public/assets/icon/LinkedIn.svg';
import InstagramIcon from '../../public/assets/icon/Instagram.svg';

// ICON DESIGN TOOLS
import FigmaIcon from '../../public/assets/icon/Figma.svg';
import AdobeIlustratorIcon from '../../public/assets/icon/AdobeIlustrator.svg';
import AdobePhotoshopIcon from '../../public/assets/icon/AdobePhotoshop.svg';

// ICON DEVELOPMENT
import NodeIcon from '../../public/assets/icon/NodeJs.svg';
import PrismaIcon from '../../public/assets/icon/Prisma.svg';
import ReactIcon from '../../public/assets/icon/React.svg';
import ApolloIcon from '../../public/assets/icon/Apollo.svg';
import JestIcon from '../../public/assets/icon/Jest.svg';
// import CircleCIIcon from '../../public/assets/icon/CircleCI.png';
// import SnykIcon from '../../public/assets/icon/Snyk.png';

// SVG HYBEAR
import SigleTreeSVG from '../../public/assets/icon/H-Tree.svg';
import TreesLSVG from '../../public/assets/icon/H-TreesR.svg';
import RabbitHoleSVG from '../../public/assets/icon/H-RabbitHole.svg';
import LogoSVG from '../../public/assets/icon/H-Logo.svg';
import TreesRSVG from '../../public/assets/icon/H-TreesL.svg';
import FoxSVG from '../../public/assets/icon/H-Fox.svg';

export const Content = styled.main`
  display: grid;
  grid-template:
    'profile artwork' auto
    'about artwork' auto
    'design development' auto / 50% 50%;
  overflow-x: hidden;
  padding-bottom: 60px;

  ${({ theme }) => theme.media.tablet`
      grid-template:
        'artwork' 5%
        'profile' auto
        'about' auto
        'design' auto 
        'development' auto/ auto;
      overflow: hidden;
      padding-bottom: 140px;
  `}
`;

export const Profile = styled.div`
  grid-area: profile;
  display: grid;
  align-items: center;
  grid-template-columns: minmax(180px, 180px) auto;
  border-bottom: solid 1px ${({ theme }) => theme.color.lightGrey};
  padding-bottom: 40px;
  margin: 40px;
  position: relative;
  z-index: 2;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: 100%;
    justify-content: center;
    margin: 20px 15px 0;
  `}

  .picture {
    position: relative;
    ${({ theme }) => theme.media.tablet`
      display: flex;
    `}
    img {
      margin: 0 auto;
      max-height: 180px;
      max-width: 180px;
      border-radius: 100px;
      object-fit: cover;
    }
  }
  .content {
    margin-left: 20px;
    ${({ theme }) => theme.media.tablet`
        margin: 20px 0 0 0;
        text-align: center;
    `}
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
    }
    &__shortinfo {
      font-size: 1em;
      max-width: 80%;
      strong {
        color: ${({ theme }) => theme.color.primary};
      }
      ${({ theme }) => theme.media.tablet`
          margin: 0 auto;
      `}
    }
    &__social {
      display: flex;
      align-items: center;
      margin: 10px 0;
      svg {
        width: 1.5em;
      }
      ${({ theme }) => theme.media.tablet`
          justify-content: center;
          margin-top: 20px;
          svg{
            width: 1.75em;
          }
      `}
      li {
        margin-right: 10px;
      }
    }
  }
`;

export const GitHub = styled(GitHubIcon)``;
export const Medium = styled(MediumIcon)``;
export const LinkedIn = styled(LinkedInIcon)``;
export const Instagram = styled(InstagramIcon)``;

export const Claw = styled(ClawEffect)`
  width: 50%;
  position: absolute;
  left: 1em;
  bottom: -1em;
  ${({ theme }) => theme.media.tablet`
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const Artwork = styled.div`
  grid-area: artwork;
  background: ${({ theme }) => theme.color.rawWhite};
  position: relative;
  ${({ theme }) => theme.media.tablet`
      // display: none;
  `}
`;

export const BG = styled.div`
  position: absolute;
  width: 150%;
  height: 100%;
  background: ${({ theme }) => theme.color.rawWhite};
  top: -5vw;
  right: 0;
  z-index: 1;
  mask-image: url('/assets/icon/H-BGMask.svg');
  mask-position: left;
  mask-repeat: no-repeat;
  mask-size: cover;
  ${({ theme }) => theme.media.tablet`
      // display: none;
  `}
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

const HighLightBG = keyframes`{
  0%{
    opacity: .5;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: .5;
  }
}`;
export const BGLight = styled.div`
  background: linear-gradient(180deg, rgba(12, 21, 45, 0) 0%, #09468b 60%, #008bad 100%);
  /* filter: invert(1); */
  height: 70%;
  width: 100%;
  position: absolute;
  animation: ${HighLightBG} 8s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite;
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
  width: 10%;
  position: absolute;
  left: 25%;
  bottom: 30%;
  ${({ theme }) => theme.media.tablet`
    left: 10%;
  `}
`;

export const RabbitHole = styled(RabbitHoleSVG)`
  width: 25%;
  position: absolute;
  right: 40%;
  bottom: 15%;
  ${({ theme }) => theme.media.tablet`
    right: 60%;
    bottom: 10%;
  `}
`;

export const Logo = styled(LogoSVG)`
  width: 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
`;

export const Fox = styled(FoxSVG)`
  width: 20%;
  position: absolute;
  bottom: 10%;
  right: 5%;
`;

export const TreesR = styled(TreesRSVG)`
  width: 13%;
  position: absolute;
  right: 25%;
  bottom: 30%;
`;

export const SingleTree = styled(SigleTreeSVG)`
  width: 5%;
  position: absolute;
  right: 10%;
  bottom: 35%;
`;

export const AboutProject = styled.div`
  grid-area: about;
  margin: 0 40px;
  ${({ theme }) => theme.media.tablet`
      margin: 20px 15px;
  `}
`;

export const Title = styled(GTitle)`
  text-align: left;
  font-family: 'QuadraSans-Bold';
  color: ${({ theme }) => theme.color.blue};
  margin-bottom: 20px;
`;

export const SubTitle = styled(Title)`
  font-size: 1.25em;
`;

export const Text = styled(GText)``;

export const Design = styled.div`
  grid-area: design;
  margin: 20px 0 0 40px;
  ${({ theme }) => theme.media.tablet`
      margin: 20px 15px;
  `}

  .screensContainer {
    display: flex;
    &__screen {
      margin-right: 20px;
      box-shadow: ${({ theme }) => theme.misc.bs};
      object-fit: contain;
      ${({ theme }) => theme.media.tablet`
          &:nth-child(1){
            width: 70%;
          }
          &:nth-child(2){
            width: 20%;
          }
      `}
    }
    &__link {
      text-decoration: underline;
      padding: 10px 0;
      display: inline-block;
    }
  }

  .toolsContainer {
    display: flex;
    &__tool {
      padding: 20px;
      display: flex;
      flex-flow: column;
      align-items: center;
      box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
      margin-right: 10px;
      background: ${({ theme }) => theme.color.white};
      border-radius: 0.2em;
    }
  }
`;

export const Figma = styled(FigmaIcon)`
  width: 60px;
  height: 60px;
`;
export const Ilustrator = styled(AdobeIlustratorIcon)`
  width: 60px;
  height: 60px;
`;
export const Photoshop = styled(AdobePhotoshopIcon)`
  width: 60px;
  height: 60px;
`;

export const Development = styled.div`
  grid-area: development;
  margin: 20px 40px 0 0;
  ${({ theme }) => theme.media.tablet`
      margin: 20px 15px;
  `}
  .proccessContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    ${({ theme }) => theme.media.tablet`
        grid-template-columns: 100%;
    `}

    &__item {
      box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
      background: ${({ theme }) => theme.color.white};
      border-radius: 0.2em;
      overflow: hidden;
    }

    .title {
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.blue};
      text-align: center;
      padding: 10px;
      ${({ theme }) => theme.media.tablet`
          font-size: 1.5em;
      `}
    }
    .highlight {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
    }
    .proccessList {
      padding: 0 20px 20px;
      &__item {
        margin: 10px 0;
        ${({ theme }) => theme.media.tablet`
            font-size: 1.25em;
        `}
      }
    }
  }
`;

export const Node = styled(NodeIcon)`
  width: calc((100% / 3) - 40px);
  height: initial;
`;

export const Yoga = styled.img`
  width: calc((100% / 3) - 20px);
  margin: 0 10px;
  height: initial;
`;

export const Prisma = styled(PrismaIcon)`
  width: calc((100% / 3) - 40px);
  height: initial;
`;

export const ReactI = styled(ReactIcon)`
  width: calc((100% / 3) - 40px);
  height: initial;
`;

export const Apollo = styled(ApolloIcon)`
  width: calc((100% / 3) - 20px);
  margin: 0 10px;
  height: initial;
`;

export const Jest = styled(JestIcon)`
  width: calc((100% / 3) - 50px);
  height: initial;
`;

export const CircleCI = styled.img`
  width: calc((100% / 3) - 40px);
  margin: 0 10px;
  height: initial;
`;

export const Snyk = styled.img`
  width: calc((100% / 3));
  margin: 0 10px;
  height: initial;
`;
