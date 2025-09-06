"use client";
import { useEffect, useState, useRef } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const target = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (totalScroll / windowHeight) * 100;
      target.current = scrollPercent;
    };

    const animate = () => {
      setScroll((prev) => prev + (target.current - prev) * 0.1);
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-xl shadow-transparent z-[9999]"
      style={{ width: `${scroll}%` }}
    />
  );
}



// 