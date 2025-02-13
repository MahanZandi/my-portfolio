"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonStars } from "react-icons/pi";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | null;

const ThemeToggle:React.FC = () => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null; 

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="button-theme"
      aria-label="تغییر تم"
    >
      {theme === "light" ? <PiMoonStars/> : <IoSunnyOutline/>}
    </button>
  );
}

export default ThemeToggle;
