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
        slideIn: {
          "0%": {
            display: "none",
            transform: "translateY(-100%)",
          },
          "0.01%": {
            display: "block",
            transform: "translateY(-100%)",
          },
          "100%": {
            display: "block",
            transform: "translateY(0%)",
          },
        },
        slideOut: {
          "0%": {
            display: "block",
            transform: "translateY(0%)",
          },
          "99.9%": {
            display: "block",
            transform: "translateY(-100%)",
          },
          "100%": {
            display: "none",
            transform: "translateY(-100%)",
          },
        },
        rotateIn: {
          "0%": {
            visibility: "hidden",
            transform: "rotateX(0.5turn)",
          },
          "50%": {
            visibility: "hidden",
            transform: "rotateX(0.25turn)",
          },
          "50.01%": {
            visibility: "visible",
          },
          "100%": {
            visibility: "visible",
            transform: "rotateX(0turn)",
          },
        },
        rotateOut: {
          "0%": {
            visibility: "visible",
            transform: "rotateX(0turn)",
          },
          "50%": {
            visibility: "visible",
            transform: "rotateX(0.25turn)",
          },
          "50.01%": {
            visibility: "hidden",
          },
          "100%": {
            visibility: "hidden",
            transform: "rotateX(0.5turn)",
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
