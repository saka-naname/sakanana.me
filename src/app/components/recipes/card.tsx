import { sva, type RecipeVariantProps } from "@/../styled-system/css";

export const card = sva({
  slots: [
    "root",
    "imageWrapper",
    "image",
    "subContainer",
    "title",
    "description",
  ],
  base: {
    imageWrapper: {
      position: "relative",
      width: "100%",
      height: "auto",
      aspectRatio: "1.414",
      roundedTop: "sm",
      bgColor: "#f0f0f0",
      overflow: "hidden",
    },
    image: {
      objectFit: "cover",
      bgColor: "#f8f8f8",
      roundedTop: "sm",
    },
    subContainer: {
      bgColor: "#f8f8f8",
      p: 4,
      pt: "0.675rem",
      overflow: "hidden",
      roundedBottom: "sm",
    },
    title: {
      fontSize: "xl",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    description: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontSize: "small",
    },
  },
  variants: {
    size: {
      md: {
        root: {
          base: {
            w: "full",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CardVariants = RecipeVariantProps<typeof card>;
