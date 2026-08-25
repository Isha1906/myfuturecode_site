import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges, Environment } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function GeometricCore() {
  const meshRef = useRef();
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  
  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    tl.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      z: Math.PI,
      ease: 'none',
    }, 0);

    tl.to(meshRef.current.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      ease: 'power1.inOut',
    }, 0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (tl) tl.kill();
    };
  }, []);

  useFrame((state, delta) => {
    // Continuous slow idle rotation on top of scroll rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
    // Mouse parallax effect (Position AND Rotation)
    if (groupRef.current) {
      // 1. Move the ball across the screen based on mouse
      const targetPosX = mouse.current.x * 7; // moves left/right up to 7 units
      const targetPosY = mouse.current.y * 4; // moves up/down up to 4 units
      groupRef.current.position.x += (targetPosX - groupRef.current.position.x) * delta * 2.5;
      groupRef.current.position.y += (targetPosY - groupRef.current.position.y) * delta * 2.5;

      // 2. Also subtly tilt the ball
      const targetRotX = -mouse.current.y * 0.4;
      const targetRotY = mouse.current.x * 0.4;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * delta * 3;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * delta * 3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial 
          color="#020617" 
          roughness={0.2} 
          metalness={0.8}
          wireframe={false}
        />
        <Edges 
          linewidth={1} 
          scale={1.0} 
          threshold={15} 
          color="#4f46e5" 
        />
      </mesh>
    </group>
  );
}

function SceneLights() {
  const blueLightRef = useRef();
  const purpleLightRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    tl.to(blueLightRef.current.position, {
      y: -5,
      x: 5,
      ease: 'none',
    }, 0);

    tl.to(purpleLightRef.current.position, {
      y: 5,
      x: -5,
      ease: 'none',
    }, 0);

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.1} />
      {/* Blue Light */}
      <pointLight ref={blueLightRef} position={[-5, 5, 5]} intensity={50} color="#1d4ed8" distance={20} />
      {/* Purple Light */}
      <pointLight ref={purpleLightRef} position={[5, -5, 5]} intensity={50} color="#9333ea" distance={20} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
    </>
  );
}

export function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-950">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <SceneLights />
        <GeometricCore />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
