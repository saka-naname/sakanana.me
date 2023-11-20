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
      opacity: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      translate: "auto",
      translateX: "-1/2",
      translateY: "-1/2",
    },
    iconUnchecked: {
      opacity: "1",
      position: "absolute",
      top: "50%",
      left: "50%",
      translate: "auto",
      translateX: "-1/2",
      translateY: "-1/2",
    },
  },
  variants: {
    isChecked: {
      true: {
        iconChecked: {
          opacity: "1",
        },
        iconUnchecked: {
          opacity: "0",
        },
      },
    },
  },
});

export type ToggleIconVariants = RecipeVariantProps<typeof toggleIcon>;
