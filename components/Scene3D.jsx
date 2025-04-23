"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Monitor3D from "@/components/Monitor3D";
import MousePad3D from "./MousePad3D";
import MouseKeybord3D from "./MouseKeybord3D";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper } from "three";

const LightHelper = () => {
  const lightRef = useRef();
  useHelper(lightRef, PointLightHelper, 1, "cyan");

  return (
    <pointLight
      ref={lightRef}
      position={[0, 7, 5]}
      intensity={100}
      distance={50} 
    />
  );
};

const Scene3D = () => {
  return (
    <div className="bg-gray-800 w-full h-screen">
      <Canvas camera={{ position: [-1, 1, 4.5], fov: 75 }} shadows>
        <ambientLight intensity={1.5} />
        <LightHelper />
        <Monitor3D />
        <MousePad3D />
        <MouseKeybord3D/>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Scene3D;