import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT: '14px',
        },
        screens: {
          'xl': '1280px', 
        },
      },
      fontFamily: {
        vazir: ['Vazirmatn']
      },
      screens: {
        tablet: "768px", // معادل md
        desktop: "1024px", // معادل lg
      },
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
