import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface Marker {
  position: [number, number, number];
  label: string;
  number: string;
}

const markers: Marker[] = [
  { position: [-0.7, 0.5, 0.5], label: 'NORTH AMERICA', number: '01' },
  { position: [-0.5, 0.3, 0.7], label: 'USA', number: '02' },
  { position: [-0.5, -0.6, 0.5], label: 'SOUTH AMERICA', number: '03' },
  { position: [0.1, 0.6, 0.7], label: 'EUROPE', number: '04' },
  { position: [0.7, 0.4, 0.4], label: 'ASIA', number: '05' },
  { position: [0.2, -0.3, 0.8], label: 'AFRICA', number: '06' },
  { position: [0.8, -0.5, -0.2], label: 'AUSTRALIA', number: '07' },
];

function Pin({ position, label, number }: Marker) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial 
          color="#e53935" 
          emissive="#e53935"
          emissiveIntensity={hovered ? 0.8 : 0.4}
        />
      </mesh>
      
      {hovered && (
        <Html distanceFactor={8} position={[0, 0.15, 0]}>
          <div className="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-xl border-2 border-white">
            {number} - {label}
          </div>
        </Html>
      )}
    </group>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);

  useFrame((state, delta) => {
    if (globeRef.current && !isDragging) {
      globeRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      <Sphere ref={globeRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#2d3748"
          metalness={0.3}
          roughness={0.7}
          wireframe={false}
        />
      </Sphere>
      
      {/* Wireframe overlay for continents effect */}
      <Sphere args={[1.51, 32, 32]}>
        <meshBasicMaterial
          color="#1a1a1a"
          wireframe={true}
          transparent={true}
          opacity={0.2}
        />
      </Sphere>

      {markers.map((marker, index) => (
        <Pin key={index} {...marker} />
      ))}
    </group>
  );
}

export default function Globe3D() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-background shadow-2xl">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#e53935" />
        
        <Globe />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={6}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
