"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useState, useEffect, useRef, createContext, useContext } from "react";

const TerminalContext = createContext({ isInView: false });

export const useTerminalContext = () => useContext(TerminalContext);

interface TerminalProps {
  children: ReactNode;
  className?: string;
}

export default function Terminal({ children, className }: TerminalProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <TerminalContext.Provider value={{ isInView }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative w-full overflow-hidden rounded-lg border border-gray-300 bg-gray-50 shadow-lg dark:border-gray-700 dark:bg-gray-900",
          className
        )}
      >
        <div className="flex items-center gap-2 border-b border-gray-300 bg-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-sm text-gray-600 dark:text-gray-400">
            Terminal
          </div>
        </div>
        <div className="p-4 font-mono text-sm">{children}</div>
      </motion.div>
    </TerminalContext.Provider>
  );
}

interface TerminalLineProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TerminalLine({ text, delay = 0, className }: TerminalLineProps) {
  const { isInView } = useTerminalContext();
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const visibilityTimer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(visibilityTimer);
  }, [delay, isInView]);

  useEffect(() => {
    if (!isVisible) return;
    
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [isVisible, text]);

  if (!isVisible) return null;

  return (
    <div className={cn("text-gray-800 dark:text-gray-200 text-xs md:text-base", className)}>
      <span className="text-green-500">$</span> {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
}
