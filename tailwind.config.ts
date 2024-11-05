import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      animation: {
        gradientMove: 'gradientMove 6s ease infinite',
        glow: 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          'from': { boxShadow: '0 0 15px rgba(140, 69, 255, 0.7), 0 0 15px rgba(140, 69, 255, 0.8)' },
          'to': { boxShadow: '0 0 20px rgba(140, 69, 255, 0.9), 0 0 20px rgba(140, 69, 255, 1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
