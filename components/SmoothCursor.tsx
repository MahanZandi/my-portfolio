"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SmoothCursor = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDot.current;
    const outline = cursorOutline.current;

    const move = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const addHoverEvents = () => {
      const hoverTargets =
        document.querySelectorAll<HTMLElement>(".cursor-hover");

      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(outline, {
            scale: 1.5, 
            borderColor: "#22d3ee", 
            duration: 0.3,
          });
          gsap.to(dot, {
            scale: 2,
            width: 20,
            height: 20,
            backgroundColor: "transparent",
            duration: 0.3,
            onStart: () => {
              if (dot) {
                dot.innerHTML = "+";
                dot.style.display = "flex";
                dot.style.alignItems = "center";
                dot.style.justifyContent = "center";
                dot.style.fontSize = "16px";
                dot.style.color = "#06b6d4";
                dot.style.fontWeight = "bold";
              }
            },
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(outline, {
            scale: 1,
            borderColor: "#06b6d4",
            duration: 0.3,
          });
          gsap.to(dot, {
            scale: 1,
            width: 8,
            height: 8,
            backgroundColor: "#22d3ee",
            borderRadius: "50%",
            duration: 0.3,
            onStart: () => {
              if (dot) {
                dot.innerHTML = "";
                dot.style.display = "block";
                dot.style.color = "transparent";
              }
            },
          });
        });
      });
    };

    window.addEventListener("mousemove", move);
    addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />

      <div
        ref={cursorOutline}
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default SmoothCursor;
