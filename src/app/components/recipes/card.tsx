import { sva } from "@/../styled-system/css";

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
    root: {
      display: "grid",
      gridTemplateRows: "5fr 2fr",
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      height: "auto",
      aspectRatio: "1.414",
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