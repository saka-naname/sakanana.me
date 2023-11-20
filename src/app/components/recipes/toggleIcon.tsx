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
      visibility: "hidden",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "rotateX(0.5turn)",
      translate: "auto",
      translateX: "-1/2",
      translateY: "-1/2",
      animation: "rotateOut 0.2s ease 0s forwards",
    },
    iconUnchecked: {
      visibility: "visible",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "rotateX(0turn)",
      translate: "auto",
      translateX: "-1/2",
      translateY: "-1/2",
      animation: "rotateIn 0.2s ease 0s forwards",
    },
  },
  variants: {
    isChecked: {
      true: {
        iconChecked: {
          visibility: "visible",
          transform: "rotateX(0turn)",
          animation: "rotateIn 0.2s ease 0s forwards",
        },
        iconUnchecked: {
          visibility: "hidden",
          transform: "rotateX(0.5turn)",
          animation: "rotateOut 0.2s ease 0s forwards",
        },
      },
    },
  },
});

export type ToggleIconVariants = RecipeVariantProps<typeof toggleIcon>;
