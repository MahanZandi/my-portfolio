"use client";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect } from "react";

const Monitor3D = () => {
  const gltf = useLoader(GLTFLoader, "/ThreeJs/Models/monitor.glb");

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/video.mp4"; // مسیر ویدئو خود را وارد کنید
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.play();
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.flipY = true;

    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // console.log(`"🧩 Mesh ${child.name}:"`, child);
        if (child.material instanceof THREE.MeshStandardMaterial) {
          if (child.name == "Ultrawide_Monitor_Screen_0") {
            child.material = new THREE.MeshStandardMaterial({
              map: videoTexture,
              metalness: 0.2,
              roughness: 0.5,
            });
          }
        }
      }
    });
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} scale={0.6} position={[0, 1, 0]} />
    </>
  );
};

export default Monitor3D;
