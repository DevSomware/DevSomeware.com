import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import aspectRatio from "@tailwindcss/aspect-ratio";


type ThemeFunction = (path: string) => unknown;


import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
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
        gradientMove: "gradientMove 6s ease infinite",
        glow: "glow 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glow: {
          from: {
            boxShadow:
              "0 0 15px rgba(140, 69, 255, 0.7), 0 0 15px rgba(140, 69, 255, 0.8)",
          },
          to: {
            boxShadow:
              "0 0 20px rgba(140, 69, 255, 0.9), 0 0 20px rgba(140, 69, 255, 1)",
              glow: "0 0 10px rgba(128, 0, 128, 0.8), 0 0 20px rgba(128, 0, 128, 10)",
          },
        },
      },
    },
  },
  plugins: [ 
    addVariablesForColors,
    function (api: PluginAPI) {
      const { matchUtilities, theme } = api;
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor") as Record<string, string | number>) as Record<string, string>,
          type: "color",
        }
      );
    },
    aspectRatio,
  ],
};

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: (base: Record<string, Record<string, string>>) => void;
  theme: ThemeFunction;
}) {
  const allColors = flattenColorPalette(theme("colors") as Record<string, string | number>) as Record<string, string | number>;
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
