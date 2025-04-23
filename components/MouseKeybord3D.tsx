"use client";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MouseKeybord3D = () => {
  const glb = useLoader(GLTFLoader, "/ThreeJs/Models/mouse-keybord.glb");

  return (
    <>
      <primitive object={glb.scene} scale={0.4} position={[-1, -0.2, 2.5]} />
    </>
  );
};

export default MouseKeybord3D;
