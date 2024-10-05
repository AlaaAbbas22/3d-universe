import { Button } from '@headlessui/react';
import { Tooltip } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function Template({meshUrl, name, text, funFact, landscape, planet}) {
  const refContainer = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(600, 600); // Adjust the size based on your design needs

    // Append renderer to the container
    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    // Create the Earth geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      meshUrl
    );

    // Apply darker color to the material
    const material = new THREE.MeshBasicMaterial({
      map: earthTexture,
      color: new THREE.Color(0x999999), // Darken the texture by applying a color tint (darker gray)
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Orbit controls for rotating the Earth
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // smooth orbit controls
    controls.dampingFactor = 0.1;

    // Adjust camera position
    camera.position.z = 2;

    // Animation loop to rotate the Earth
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001; // slow, smooth rotation
      renderer.render(scene, camera);
    };

    animate();

    // Clean up function to dispose of the scene
    return () => {
      renderer.dispose();
      scene.clear();
    };
  }, [planet]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center pb-20">
      {/* Earth 3D model */}
      <div>
        <Tooltip title={name} placement="top" followCursor>
          <Button
            onClick={() => {
              setIsShowing(true);
            }}
            className=" flex items-center gap-2 mx-auto rounded-full bg-white/10 py-1 px-3 text-sm/6 font-semibold text-white transition data-[hover]:scale-105 data-[hover]:bg-white/15"
          >
            <div ref={refContainer} className=""></div>
          </Button>
        </Tooltip>
      </div>

      {/* Earth Information Section */}
      <div
        className="text-center text-white px-96  mt-5 bg-cover bg-center pt-20 w-[95vw] ring ring-white p-20"
        style={{
          backgroundImage: `url(${landscape})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: darkens the background for better text contrast
        }}
      >
        <h1
          className="text-6xl font-bold font-serif mb-4 text-white tracking-widest uppercase"
          style={{ fontFamily: 'Zen Maru Gothic' }}
        >
          {name}
        </h1>
        <p
          className="text-xl leading-relaxed mb-4 font-light tracking-wide"
          style={{ fontFamily: 'Zen Maru Gothic' }}
        >
          {text}
        </p>
        <p className="text-lg font-light">
          {funFact}
        </p>
      </div>
    </div>
  );
}

export default Template;
