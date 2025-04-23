"use client"
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect } from "react";

const MousePad3D = () => {
  const glb = useLoader(GLTFLoader, "/ThreeJs/Models/mouse-pad.glb");

  useEffect(() => {
    glb.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            // console.log(`"🧩 ${child.name}:"`, child);
            if (child.name == "Object_5") {
                child.material = new THREE.MeshStandardMaterial({
                    color: "blue"
                })
            }
        }
    })
  })

  return (
    <>
      <primitive object={glb.scene} scale={0.4} position={[0, -2, 1.4]} />
    </>
  );
};

export default MousePad3D;
