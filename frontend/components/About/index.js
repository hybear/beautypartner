import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Link from 'next/link';
// import { Canvas, useFrame } from 'react-three-fiber'
import {
  Content,
  Profile,
  GitHub,
  Medium,
  LinkedIn,
  Instagram,
  Claw,
  Artwork,
  BG,
  BGLight,
  BGStars,
  NatureGroup,
  SingleTree,
  TreesR,
  Logo,
  Fox,
  RabbitHole,
  TreesL,
  AboutProject,
  Title,
  SubTitle,
  Text,
  Design,
  Figma,
  Ilustrator,
  Photoshop,
  Development,
  Node,
  Yoga,
  Prisma,
  ReactI,
  Apollo,
  Jest,
  CircleCI,
  Snyk,
} from './styles';

const About = () => {
  const StarContainer = useRef(null);
  const makeStars = () => {
    let scene, camera, render;
    let stars_geometry, stars_material, stars;

    render = new THREE.WebGLRenderer({ canvas: StarContainer.current, alpha: true });
    const canvas = render.domElement;
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(20, width / height, 1, 1000);
      camera.position.z = 1;

      stars_geometry = new THREE.Geometry();
      stars_material = new THREE.ParticleBasicMaterial({
        color: 0xe6e6fa,
        size: 1,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0.875,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });

      for (let i = 0; i < 1500; i++) {
        let vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        stars_geometry.vertices.push(vertex);
      }

      stars = new THREE.ParticleSystem(stars_geometry, stars_material);
      scene.add(stars);

      // adjust displayBuffer size to match
      if (canvas.width !== width || canvas.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        render.setSize(width, height, false);
        camera.aspect = width / height;

        camera.updateProjectionMatrix();
      }

      render.render(scene, camera);
    }

    init();
  };

  useEffect(() => {
    makeStars();
  }, []);

  return (
    <Content>
      <Profile>
        <div className="picture">
          <img src="/assets/patrick.jpg" />
          <Claw />
        </div>
        <div className="content">
          <small className="content__sub">
            <i>The Artisan</i>
          </small>
          <h1 className="content__name">Patrick Castro</h1>
          <p className="content__shortinfo">
            I am a creative <strong>UX Developer</strong>, also know as the man between design and development.
          </p>
          <ul className="content__social">
            <li>
              <a href="https://medium.com/@hybear" target="_blank">
                <Medium />
              </a>
            </li>
            <li>
              <a href="https://github.com/hybear" target="_blank">
                <GitHub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thehybear" target="_blank">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hybear/" target="_blank">
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </Profile>
      <Artwork>
        <BG>
          <BGStars ref={StarContainer} />
          <BGLight />
        </BG>
        <NatureGroup>
          <SingleTree />
          <a href="http://hybear.com" target="_blank">
            <Logo />
          </a>
          <TreesL />
          <RabbitHole />
          <TreesR />
          <Fox />
        </NatureGroup>
      </Artwork>
      <AboutProject>
        <Title>About Beauty Partner</Title>
        <Text>
          The challenge was to develop an application to register new partners, and create a dashboard to group
          information of the orders placed and the cashback of each purchase.
          <Link href="/">
            <a> shop now</a>
          </Link>
        </Text>
      </AboutProject>
      <div></div>
      <Design>
        <Title>Design</Title>
        <SubTitle>Screens</SubTitle>
        <div className="screensContainer">
          <img className="screensContainer__screen desktop" src="/assets/screen-login-desk.jpg" />
          <img className="screensContainer__screen mobile" src="/assets/screen-login-mob.jpg" />
        </div>
        <a
          className="screensContainer__link"
          href="https://www.figma.com/file/4OvON0hLKU1Rp2oPBnt3zE/Beauty-Partner?node-id=0%3A1"
          target="_blank"
        >
          see all screens
        </a>
        <SubTitle>Tools</SubTitle>
        <ul className="toolsContainer">
          <li className="toolsContainer__tool">
            <Figma />
            <Text>Figma</Text>
          </li>
          <li className="toolsContainer__tool">
            <Photoshop />
            <Text>Photoshop</Text>
          </li>
          <li className="toolsContainer__tool">
            <Ilustrator />
            <Text>Ilustrator</Text>
          </li>
        </ul>
      </Design>
      <Development>
        <Title>Development</Title>
        <div className="proccessContainer">
          <div className="proccessContainer__item backend">
            <h4 className="title">Backend</h4>
            <span className="highlight">
              <Node />
              <Yoga src="/assets/icon/YogaServer.png" />
              <Prisma />
            </span>
            <ul className="proccessList">
              <li className="proccessList__item">MySQL</li>
              <li className="proccessList__item">Prisma</li>
              <li className="proccessList__item">GraphQL</li>
              <li className="proccessList__item">JWT Auth</li>
              <li className="proccessList__item">Yoga Server</li>
              <li className="proccessList__item">Node.js</li>
            </ul>
          </div>

          <div className="proccessContainer__item frontend">
            <h4 className="title">Frontend</h4>
            <span className="highlight">
              <ReactI />
              <Apollo />
              <Jest />
            </span>
            <ul className="proccessList">
              <li className="proccessList__item">React</li>
              <li className="proccessList__item">Next.js</li>
              <li className="proccessList__item">Apollo Client</li>
              <li className="proccessList__item">Styled Components</li>
              <li className="proccessList__item">Jest + Enzyme</li>
              <li className="proccessList__item">Three.js</li>
            </ul>
          </div>
          <div className="proccessContainer__item cicd">
            <h4 className="title">CI/CD</h4>
            <span className="highlight">
              <CircleCI src="/assets/icon/CircleCi.png" />
              <Snyk src="/assets/icon/Snyk.png" />
            </span>
            <ul className="proccessList">
              <li className="proccessList__item">Circle CI</li>
              <li className="proccessList__item">Husky</li>
              <li className="proccessList__item">Snyk</li>
            </ul>
          </div>
        </div>
      </Development>
    </Content>
  );
};

export default About;
