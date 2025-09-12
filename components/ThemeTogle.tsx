"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonStars } from "react-icons/pi";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useStore } from "@/libs/store";

type Theme = "light" | "dark" | null;

interface ThemeToggle {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggle> = ({ className }) => {
  const { theme, setTheme } = useStore();

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(storedTheme);
  }, [setTheme]);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) {
    return (
      <button className={`${className} animate-spin`}>
        <FaSpinner />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={className}
      aria-label="تغییر تم"
    >
      {theme === "light" ? <PiMoonStars /> : <IoSunnyOutline />}
    </button>
  );
};

export default ThemeToggle;
