"use client";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Monitor3D from "@/components/Monitor3D";
import MouseKeybord3D from "./MouseKeybord3D";
import { IoReloadOutline } from "react-icons/io5";

const Scene3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <div className="container w-full h-screen py-[64px] md:py-[96px]">
        <div className="flex justify-center items-center">
          <span className="tags">3D web</span>
        </div>
        <div className="flex text-subtitle justify-center items-center pt-[16px] text-center">
          <p>
            با Three.js می‌توان وب‌سایت‌هایی ساخت که از طراحی سنتی فراتر رفته و
            تجربه‌ای سه‌بعدی، تعاملی و کاملاً واقعی ارائه می‌دهند.
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
          {/* <MousePad3D isMobile={isMobile}/> */}
          <MouseKeybord3D isMobile={isMobile} />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      <div className="py-[16px] flex justify-center items-center container gap-2">
        <p>مانیتور رو بچرخون</p>
        <IoReloadOutline />
      </div>
    </div>
  );
};

export default Scene3D;
