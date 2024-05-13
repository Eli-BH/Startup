import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bungee: ["Bungee", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        bungeeShade: ["Bungee Shade", "cursive"],
      },
      boxShadow: {
        hard: "-8px 10px 0px 0px rgb(0,0,0)",
        hardLow: "-4px 7px 0px 0px rgb(0,0,0)",
        hardLowest: "-2px 4px 0px 0px rgb(0,0,0)",
      },
    },
  },
  plugins: [],
};
export default config;
