import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './threeScene.css';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x090917); // Set the background color to #090917

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Renderer settings
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Particle geometry setup
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    // Random particle positions
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000; // Adjusted range for visibility
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2, // Size of the particles
      transparent: true,
      opacity: 0.7, // Adjust opacity for a floating effect
    });

    // Create particles
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Set camera position
    camera.position.z = 500;

    // Animation function
    const animateParticles = () => {
      requestAnimationFrame(animateParticles);

      // Rotate particles for a dynamic effect
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;

      // Move particles up and down for a floating effect
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.01; // Floating effect
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Resize handling
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animateParticles();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="three-scene-container" />;
};

export default ThreeScene;

ThreeScene.js
