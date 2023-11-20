import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          noto: {
            value: "var(--font-noto-sans-jp), var(--font-fallback)",
          },
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            display: "none",
            opacity: "0",
          },
          "0.01%": {
            display: "block",
            opacity: "0",
          },
          "100%": {
            display: "block",
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            display: "block",
            opacity: "1",
          },
          "99.9%": {
            display: "block",
            opacity: "0",
          },
          "100%": {
            display: "none",
            opacity: "0",
          },
        },
      },
    },
  },

  // Enable jsx framework
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
