import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, TorusKnot, Sphere, Box, Octahedron, Ring } from '@react-three/drei';
import * as THREE from 'three';

function RotatingShape({ shapeType, color, wireframe, scale, speed = 1 }) {
  const meshRef = useRef();
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2 * speed;
      meshRef.current.rotation.y += delta * 0.3 * speed;
      // Gentle floating effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
    if (groupRef.current) {
      const targetX = -mouse.current.y * 0.5;
      const targetY = mouse.current.x * 0.5;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * delta * 3;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * delta * 3;
    }
  });

  const materialProps = {
    color: color || '#6366f1',
    wireframe: wireframe,
    transparent: true,
    opacity: wireframe ? 0.3 : 0.8,
    roughness: 0.2,
    metalness: 0.8,
    side: THREE.DoubleSide
  };

  const shapes = {
    icosahedron: <Icosahedron ref={meshRef} args={[1, 1]} scale={scale}><meshStandardMaterial {...materialProps} /></Icosahedron>,
    torusKnot: <TorusKnot ref={meshRef} args={[0.8, 0.25, 128, 16]} scale={scale}><meshStandardMaterial {...materialProps} /></TorusKnot>,
    sphere: <Sphere ref={meshRef} args={[1, 32, 32]} scale={scale}><meshStandardMaterial {...materialProps} /></Sphere>,
    box: <Box ref={meshRef} args={[1.2, 1.2, 1.2]} scale={scale}><meshStandardMaterial {...materialProps} /></Box>,
    octahedron: <Octahedron ref={meshRef} args={[1, 0]} scale={scale}><meshStandardMaterial {...materialProps} /></Octahedron>,
    ring: <Ring ref={meshRef} args={[0.8, 1.2, 32]} scale={scale}><meshStandardMaterial {...materialProps} /></Ring>
  };

  return <group ref={groupRef}>{shapes[shapeType] || shapes.icosahedron}</group>;
}

export function AnimatedShape({ shape = 'icosahedron', color = '#6366f1', wireframe = true, scale = 2, speed = 1, className = "" }) {
  return (
    <div className={`absolute pointer-events-none z-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color={color} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        <RotatingShape shapeType={shape} color={color} wireframe={wireframe} scale={scale} speed={speed} />
      </Canvas>
    </div>
  );
}
