import { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import { Canvas, useFrame } from 'react-three-fiber'
import {
  Content,
  Profile,
  GitHub,
  Medium,
  LinkedIn,
  Instagram,
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
  Text,
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
      camera = new THREE.PerspectiveCamera(25, width / height, 1, 10000);
      camera.position.z = 1;

      stars_geometry = new THREE.Geometry();
      stars_material = new THREE.ParticleBasicMaterial({
        color: 0xe6e6fa,
        size: 1,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });

      for (let i = 0; i < 1000; i++) {
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
        <img className="picture" src="/assets/patrick.jpg" />
        <div className="content">
          <small className="content__sub">
            <i>The Artisan</i> behind this
          </small>
          <h1 className="content__name">Patrick Castro</h1>
          <p className="content__shortinfo">
            I am a creative UX Developer, aka the man between design and development.
          </p>
          <ul className="content__social">
            <li>
              <a href="https://medium.com/@hybear">
                <Medium />
              </a>
            </li>
            <li>
              <a href="https://github.com/hybear">
                <GitHub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thehybear">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hybear/">
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
          <Logo />
          <TreesL />
          <RabbitHole />
          <TreesR />
          <Fox />
        </NatureGroup>
      </Artwork>
      <AboutProject>
        <Title>About</Title>
        <Text>
          The concept was to create a easy way to a partners and sellers register their orders and track the status, the
          solution
        </Text>
      </AboutProject>
    </Content>
  );
};

export default About;
