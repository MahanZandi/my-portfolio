"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonStars } from "react-icons/pi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.theme === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="button-theme"
    >
      {theme === "light" ? <PiMoonStars/> : <IoSunnyOutline/>}
    </button>
  );
}
