import { sva, type RecipeVariantProps } from "@/../styled-system/css";

export const toggleIcon = sva({
  slots: ["root", "iconChecked", "iconUnchecked"],
  base: {
    root: {
      position: "relative",
      display: "inline",
      fontSize: "40px",
      w: "1em",
      h: "1em",
    },
    iconChecked: {
      position: "absolute",
      visibility: "hidden",
      transform: "translate(-50%, -50%) rotateX(0.5turn)",
      transition: "transform .2s",
      animation: "rotateOut 0.2s linear 0s forwards",
      cursor: "pointer",
    },
    iconUnchecked: {
      position: "absolute",
      visibility: "visible",
      transform: "translate(-50%, -50%) rotateX(0turn)",
      transition: "transform .2s",
      animation: "rotateIn 0.2s linear 0s forwards",
      cursor: "pointer",
    },
  },
  variants: {
    isChecked: {
      true: {
        iconChecked: {
          visibility: "visible",
          transform: "translate(-50%, -50%) rotateX(0turn)",
          animation: "rotateIn 0.2s linear 0s forwards",
        },
        iconUnchecked: {
          visibility: "hidden",
          transform: "translate(-50%, -50%) rotateX(0.5turn)",
          animation: "rotateOut 0.2s linear 0s forwards",
        },
      },
    },
  },
});

export type ToggleIconVariants = RecipeVariantProps<typeof toggleIcon>;
