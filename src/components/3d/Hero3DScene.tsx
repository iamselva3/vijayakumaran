import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingPolyhedron({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      // Mouse parallax tilt
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY * 0.5, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX * 0.5, 0.05);
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.25;
      innerRef.current.rotation.y -= delta * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer wireframe icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial
          wireframe
          color="#3B82F6"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Inner wireframe octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial
          wireframe
          color="#8B5CF6"
          transparent
          opacity={0.35}
        />
      </mesh>

    </group>
  );
}

function CloudParticles({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#60A5FA"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

interface Hero3DSceneProps {
  normalizedMouseX?: number;
  normalizedMouseY?: number;
}

const Hero3DScene: React.FC<Hero3DSceneProps> = ({
  normalizedMouseX = 0,
  normalizedMouseY = 0,
}) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <RotatingPolyhedron mouseX={normalizedMouseX} mouseY={normalizedMouseY} />
        <CloudParticles count={70} />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
