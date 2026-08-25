import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedText() {
  const groupRef = useRef();

  useFrame((state) => {
    // Interactive mouse parallax
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.mouse.x * Math.PI) / 8, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.mouse.y * Math.PI) / 8, 0.05);
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <Text
            position={[0, 1.2, 0]}
            fontSize={1.8}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
            font="https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NJtEtq.woff"
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Building the
          </Text>
        </Float>
        
        <Float speed={3} rotationIntensity={0.4} floatIntensity={1}>
          <Text
            position={[0, -0.8, 0.5]} 
            fontSize={2.8}
            letterSpacing={-0.02}
            font="https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NJtEtq.woff"
            color="#818cf8"
            anchorX="center"
            anchorY="middle"
          >
            Future
            <meshStandardMaterial color="#818cf8" emissive="#6366f1" emissiveIntensity={0.8} />
          </Text>
        </Float>
      </Center>
    </group>
  );
}

export function HeroText3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-[50vh] w-full" />;

  return (
    <div className="w-full h-[50vh] flex items-center justify-center relative z-20 pointer-events-none mb-6">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
        <AnimatedText />
      </Canvas>
    </div>
  );
}
