"use client";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Monitor3D from "@/components/Monitor3D";
import MouseKeybord3D from "./MouseKeybord3D";
import { IoReloadOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

const Scene3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('3dweb')

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="scene3d">
      <div className="scene3d-container">
        <div className="scene3d-tag-container">
          <span className="tags">3D web</span>
        </div>
        <div className="scene3d-description">
          <p>
            {t('description')}
          </p>
        </div>
        <Canvas
          camera={{
            position: [0, 0.8, isMobile ? 8 : 4.8],
            fov: 75,
          }}
        >
          <ambientLight intensity={1.5} />
          <pointLight position={[0, 7, 4]} intensity={100} distance={50} />
          <Monitor3D isMobile={isMobile} />
          <MouseKeybord3D isMobile={isMobile} />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      <div className="scene3d-bottom-text">
        <p>{t('bottom-text')}</p>
        <IoReloadOutline />
      </div>
    </div>
  );
};

export default Scene3D;
