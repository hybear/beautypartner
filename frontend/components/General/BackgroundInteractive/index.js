import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three';

// UI
import Container from './styles';

const Background = () => {
  const HeroInteractive = useRef();
  //   const [hovered, setHover] = useState(false)
  //   const [active, setActive] = useState(false)

  const createHeroInteractive = $container => {
    //   'use strict';
    //   // prettier-ignore
    let renderer,
      scene,
      camera,
      pixelRatio = Math.min(window.devicePixelRatio, 2),
      geometryCenterPiece,
      materialCenterPiece,
      meshCenterPiece,
      geometry1,
      material1,
      mesh1,
      geometry2,
      material2,
      mesh2,
      fov = 45;

    let vertexShaderCenterPiece = `uniform sampler2D u_mask;
            varying vec2 vUv;
            
            void main() {
                vUv = uv;
                vec3 tex = texture2D(u_mask, vUv).rgb;
                float brightness = (tex.r + tex.g + tex.b) * 0.333;
                vec3 pos = position;
                pos.z += (1. - brightness) * 7.;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }`;
    let fragmentShaderCenterPiece = `float lighten(float base, float blend) {
            return max(blend,base);
        }
        
        vec3 lighten(vec3 base, vec3 blend) {
            return vec3(lighten(base.r,blend.r),lighten(base.g,blend.g),lighten(base.b,blend.b));
        }
        
        vec3 lighten(vec3 base, vec3 blend, float opacity) {
            return (lighten(base, blend) * opacity + base * (1.0 - opacity));
        }
        float circle(in vec2 _st, in float _radius, in float _smoothing) {
            vec2 l = _st - vec2(0.5);
            return 1.0 - smoothstep(
                _radius - (_radius * _smoothing),
                _radius + (_radius * _smoothing),
                dot(l, l) * 4.0
            );
        }
        
        uniform sampler2D u_texture;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        varying vec2 vUv;
        
        void main() {
            // vec2 uv = vec2(vUv.x, sin(vUv.y * 2. * 3.14159265) * 0.5 + 0.5);
            vec2 uv = vUv;
            vec3 tex = texture2D(u_texture, uv).rgb;
            vec3 color = lighten(
                tex,
                mix(u_color1, u_color2, uv.x),
                0.0
            );
        
            float alpha = circle(uv, 0.5, 1.);
        
            gl_FragColor = vec4(color, alpha);
        }`;
    let vertexShader1 = `varying vec2 vUv;
      
      void main() {
          vUv = uv;
          vec3 pos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }`;
    let fragmentShader1 = `vec3 rgb(float r, float g, float b) {
          return vec3(r / 255., g / 255., b / 255.);
      }
      
      vec3 rgb(float c) {
          return vec3(c / 255., c / 255., c / 255.);
      }
      
      uniform vec3 u_color;
      uniform float u_width;
      uniform vec2 u_size;
      varying vec2 vUv;
      
      float circle(in vec2 _st, in float _radius, in float smoothing){
          vec2 l = _st-vec2(0.5);
          return 1.-smoothstep(_radius-(_radius*smoothing), _radius+(_radius*smoothing), dot(l,l)*4.0);
      }
      
      void main() {
          vec4 color = vec4(rgb(0.0, 0.0, 0.0), 1.0);
          float colorIntensity = circle(vUv, 0.95, 0.008) - circle(vUv, 0.95 - u_width * 7., 0.008);
          float glowIntensity = circle(vUv, 1., 0.02) - circle(vUv, 0.94 - u_width * 7., 0.02);
      
          vec3 plusColor = rgb(u_color.r, u_color.g, u_color.b);
          // vec3 plusColor = vec3(1.);
          color = vec4(plusColor, colorIntensity + glowIntensity * 0.08);
      
          gl_FragColor = color;
      }`;

    let mousePosition = {
      x: 0.5,
      y: 0.5,
    };
    let v2MousePosition = new THREE.Vector2(mousePosition.x, mousePosition.y);

    let start = Date.now();
    let fixedTime = 0,
      lastFixedTime = 0,
      timeDelta = 0,
      timeOffset = 0,
      dynamicTime = 0;

    let renderUpdates = {
      rotate: [],
    };

    let w, h, isMobile;

    let camX = 0,
      camY = 0;

    let isFocused = true,
      isInited = false,
      inViewport = false;

    window.addEventListener('blur', function() {
      isFocused = false;
    });
    window.addEventListener('focus', function() {
      if (!isFocused) {
        isFocused = true;
        if (isInited) {
          render();
        }
      }
    });

    function updateSize() {
      w = $container.current.offsetWidth;
      h = $container.current.offsetHeight;
      isMobile = w < 800;
      pixelRatio = isMobile ? Math.min(window.devicePixelRatio, 2) : 1;
    }

    var loadedAssetsCount = 0;
    var requiredAssetsCount = 2;

    function hasEverythingLoaded() {
      if (loadedAssetsCount === requiredAssetsCount) {
        init();
      }
    }

    var textureLoader = new THREE.TextureLoader();

    var imageTexture1Width, imageTexture1Height;
    var imageTexture1 = textureLoader.load('/assets/beauty-bw2.jpg', function(texture) {
      imageTexture1Width = texture.image.width;
      imageTexture1Height = texture.image.height;
      texture.generateMipmaps = false;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;

      loadedAssetsCount++;
      hasEverythingLoaded();
    });

    var imageTexture2Width, imageTexture2Height;
    var imageTexture2 = textureLoader.load('/assets/beauty-raw.jpg', function(texture) {
      imageTexture2Width = texture.image.width;
      imageTexture2Height = texture.image.height;
      texture.generateMipmaps = false;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;

      loadedAssetsCount++;
      hasEverythingLoaded();
    });

    function init() {
      updateSize();

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(fov, w / h, 1, 500);
      camera.position.z = isMobile ? 200 : 150;

      scene.add(camera);

      geometryCenterPiece = new THREE.PlaneGeometry(imageTexture2Width * 0.1, imageTexture2Height * 0.1, 100, 100);
      materialCenterPiece = new THREE.ShaderMaterial({
        uniforms: {
          u_mask: { type: 't', value: imageTexture1 },
          u_texture: { type: 't', value: imageTexture2 },
          u_color1: {
            type: 'v3',
            value: new THREE.Color('rgb(255, 174, 73)'),
          },
          u_color2: {
            type: 'v3',
            value: new THREE.Color('rgb(0, 255, 243)'),
          },
        },
        fragmentShader: fragmentShaderCenterPiece,
        vertexShader: vertexShaderCenterPiece,
        transparent: true,
      });
      meshCenterPiece = new THREE.Mesh(geometryCenterPiece, materialCenterPiece);
      scene.add(meshCenterPiece);

      geometry1 = new THREE.PlaneGeometry(50, 50);
      material1 = new THREE.ShaderMaterial({
        uniforms: {
          u_color: { type: 'v3', value: new THREE.Vector3(255, 255, 255) },
          u_width: { type: 'f', value: 0.003 },
          u_size: { type: 'v2', value: new THREE.Vector2(50, 50) },
        },
        fragmentShader: fragmentShader1,
        vertexShader: vertexShader1,
        transparent: true,
      });
      mesh1 = new THREE.Mesh(geometry1, material1);
      mesh1.position.set(0, 0, 30);
      scene.add(mesh1);

      geometry2 = new THREE.PlaneGeometry(80, 80);
      material2 = new THREE.ShaderMaterial({
        uniforms: {
          u_color: { type: 'v3', value: new THREE.Vector3(255, 255, 255) },
          u_width: { type: 'f', value: 0.003 },
          u_size: { type: 'v2', value: new THREE.Vector2(80, 80) },
        },
        fragmentShader: fragmentShader1,
        vertexShader: vertexShader1,
        transparent: true,
      });
      mesh2 = new THREE.Mesh(geometry2, material2);
      mesh2.position.set(0, 0, 20);
      scene.add(mesh2);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(w, h);
      renderer.setClearColor(new THREE.Color('rgb(255,255,255)'));

      $container.current.appendChild(renderer.domElement);

      window.addEventListener('resize', handleResize);
      if ('ontouchstart' in window) {
        document.body.addEventListener('touchmove', handleTouchMove);
      } else {
        document.body.addEventListener('mousemove', handleMouseMove);
      }

      isInited = true;
      render();
    }

    function handleResize() {
      updateSize();
      renderer.setSize(w, h);
      renderer.setPixelRatio(pixelRatio);
      camera.aspect = w / h;
      camera.position.z = isMobile ? 200 : 150;

      camera.updateProjectionMatrix();
    }

    function handleTouchMove(e) {
      var touch = e.touches[0];
      mousePosition.x = touch.pageX / w;
      mousePosition.y = touch.pageY / h;
    }

    function handleMouseMove(e) {
      mousePosition.x = e.pageX / w;
      mousePosition.y = e.pageY / h;
    }

    function render(timestamp) {
      if (isFocused) {
        camX = ((mousePosition.x - 0.5) * (isMobile ? 120 : 100) - camera.position.x) * 0.05;
        camY = ((mousePosition.y - 0.5) * (isMobile ? 80 : 60) - camera.position.y) * 0.05;

        camera.position.x += camX;
        camera.position.y += camY;
        camera.position.z += camY;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        requestAnimationFrame(render);
      }
    }
  };

  useEffect(() => {
    createHeroInteractive(HeroInteractive);
  }, []);

  return <Container ref={HeroInteractive}></Container>;
};

export default Background;
