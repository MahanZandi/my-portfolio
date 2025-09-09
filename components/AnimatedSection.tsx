// components/AnimatedSection.tsx
"use client";
import { useRef } from "react";
import useInView from "@/hooks/useInView";
import clsx from "clsx";

interface AnimatedSectionProps {
  children: React.ReactNode;
  style: string;
}

const AnimatedSection = ({ children, style }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out opacity-0",
        isInView && `${style} opacity-100 translate-y-0`
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
