import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function App() {
  const refContainer = useRef(null);
  const [count, setCount] = useState(0)

  useEffect(()=>{  // Scene
    
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(25, 1, 1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0 );
    renderer.setSize(370, 370);

    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
    
    const material = new THREE.MeshBasicMaterial({ map: earthTexture });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    
    // OrbitControls to allow dragging the Earth
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth dragging
    controls.dampingFactor = 0.1;


    



    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.001;
      renderer.render(scene, camera);

    };
    animate();


    },[])

  return (
    <>
      <div>
      
            <div className="earth-section flex items-center justify-between bg-gradient-to-r from-indigo-900 via-blue-800 to-teal-700 p-8 rounded-lg shadow-lg text-white">
      <div className="earth-3d w-1/2 flex justify-center items-center">
        <div className="earth-model bg-transparent w-96 h-96 rounded-full border-4 border-indigo-300 shadow-2xl bg-black flex items-center mx-auto">
        <div ref={refContainer} className='container dr'></div>
        </div>
      </div>

      <div className="earth-info w-1/2 p-6 text-left">
        <h2 className="text-4xl font-extrabold mb-4 text-indigo-200">🌍 Our Planet: Earth</h2>
        <p className="text-xl leading-relaxed mb-4">
          Earth, the "Blue Planet," is the third from the Sun and the only world known to harbor life. 
          It’s the largest of the terrestrial planets in the Solar System, with oceans that cover more than 70% of its surface.
        </p>
        <p className="text-lg mb-4">
          🌎 <strong>Earth's Atmosphere:</strong> A life-sustaining layer of gases shields us from harmful radiation, 
          burns up meteors, and creates the stunning phenomenon of auroras near the poles.
        </p>
        <p className="text-lg mb-4">
          🌏 <strong>Fun Fact:</strong> Earth isn’t a perfect sphere—due to its rotation, it’s slightly flattened at the poles 
          and bulges at the equator, making it an oblate spheroid!
        </p>
        <p className="text-lg">
          🌍 <strong>Gravity:</strong> Earth’s gravitational pull (9.8 m/s²) keeps us grounded and causes the moon to orbit us, 
          creating the tides we experience on our coastlines.
        </p>
      </div>
    </div>

      </div>
    </>
  )
}

export default App
