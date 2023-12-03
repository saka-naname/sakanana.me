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
      semanticTokens: {
        colors: {
          navBar: {
            bg: {
              DEFAULT: {
                value: "#595246",
              },
            },
            text: {
              DEFAULT: {
                value: "#FFFFFF",
              },
              hover: {
                value: "#F2E8C9",
              },
            },
          },
          navMenu: {
            bg: {
              DEFAULT: {
                value: "#FFF8EE",
              },
            },
            text: {
              DEFAULT: {
                value: "#595246",
              },
            },
          },
          body: {
            bg: {
              value: "#FFF8EE",
            },
            title: {
              value: "#595246",
            },
          },
          content: {
            bg: {
              value: "#FFFFFF",
            },
            text: {
              DEFAULT: {
                value: "#595246",
              },
              secondary: {
                value: "#99948E",
              },
            },
            separator: {
              value: "#cdcbc7",
            },
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
          "50%": {
            visibility: "visible",
          },
          "100%": {
            visibility: "visible",
          },
        },
        rotateOut: {
          "50%": {
            visibility: "hidden",
          },
          "100%": {
            visibility: "hidden",
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
