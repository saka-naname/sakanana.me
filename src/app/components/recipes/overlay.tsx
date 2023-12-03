import { cva } from "@/../styled-system/css";

export const overlay = cva({
  base: {
    position: "fixed",
    w: "screen",
    h: "screen",
    zIndex: "65534",
    bgColor: "#00000040",
    display: "none",
    opacity: "0",
    animation: "fadeOut 0.2s ease 0s forwards",
  },
  variants: {
    visible: {
      true: {
        display: "block",
        opacity: "1",
        animation: "fadeIn 0.2s ease 0s forwards",
      },
    },
  },
});
