import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, Text3D, Float, Environment, ContactShadows } from '@react-three/drei';

function FloatingText({ text, size = 1.5 }) {
  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.6} // XYZ rotation intensity
      floatIntensity={1.2} // Up/down float intensity
    >
      <Center>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={size}
          height={0.4}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.03}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial 
            color="#eab308" // Tailwind yellow-500
            roughness={0.1}
            metalness={0.8}
            emissive="#ca8a04" // Tailwind yellow-600
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

export function AnimatedText3D({ text, size = 1.5, className }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
        <Environment preset="city" />
        <FloatingText text={text} size={size} />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}
