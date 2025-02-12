import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center: true
      },
      fontFamily: {
        vazir: ['Vazirmatn']
      },
      screens: {
        tablet: "768px", // معادل md
        desktop: "1024px", // معادل lg
      },
      
    },
  },
  plugins: [],
} satisfies Config;
