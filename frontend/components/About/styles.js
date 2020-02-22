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
import TreesRSVG from '../../public/assets/icon/H-TreesR.svg';
import RabbitHoleSVG from '../../public/assets/icon/H-RabbitHole.svg';
import LogoSVG from '../../public/assets/icon/H-Logo.svg';
import TreesLSVG from '../../public/assets/icon/H-TreesL.svg';
import FoxSVG from '../../public/assets/icon/H-Fox.svg';

export const GitHub = styled(GitHubIcon)`
  width: 1.5em;
`;
export const Medium = styled(MediumIcon)`
  width: 1.5em;
`;
export const LinkedIn = styled(LinkedInIcon)`
  width: 1.5em;
`;
export const Instagram = styled(InstagramIcon)`
  width: 1.5em;
`;

export const Claw = styled(ClawEffect)`
  width: 50%;
  position: absolute;
  left: 1em;
  bottom: -1em;
`;

export const Content = styled.main`
  display: grid;
  grid-template:
    'profile artwork' auto
    'about artwork' auto
    'design development' auto / 50% 50%;
  overflow-x: hidden;
  padding-bottom: 60px;
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
  .picture {
    position: relative;
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
  width: 13%;
  position: absolute;
  right: 20%;
  bottom: 30%;
`;

export const RabbitHole = styled(RabbitHoleSVG)`
  width: 25%;
  position: absolute;
  right: 40%;
  bottom: 8%;
`;

export const Logo = styled(LogoSVG)`
  width: 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
`;

export const Fox = styled(FoxSVG)`
  width: 17%;
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

export const SubTitle = styled(Title)`
  font-size: 1.25em;
`;

export const Text = styled(GText)``;

export const Design = styled.div`
  margin: 20px 0 0 40px;

  .screensContainer {
    display: flex;
    &__screen {
      margin-right: 20px;
      box-shadow: ${({ theme }) => theme.misc.bs};
      object-fit: contain;
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
  margin: 20px 40px 0 0;
  .proccessContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

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
