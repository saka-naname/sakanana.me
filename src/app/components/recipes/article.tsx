import { sva, type RecipeVariantProps } from "@/../styled-system/css";

export const availableTagNames = [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "p",
  "figure",
  "a",
  "ul",
];

export const article = sva({
  slots: availableTagNames,
  base: {
    h1: {
      colorPalette: "content",
      color: "colorPalette.text",
      fontSize: "3xl",
      fontWeight: "700",
      "&:not(:first-child)": {
        mt: 8,
      },
      mb: 4,
      borderBottom: "1px solid",
      borderColor: "colorPalette.separator",
    },
    h2: {
      colorPalette: "content",
      color: "colorPalette.text",
      fontSize: "2xl",
      fontWeight: "700",
      "&:not(:first-child)": {
        mt: 8,
      },
      mb: 4,
      borderBottom: "1px solid",
      borderColor: "colorPalette.separator",
    },
    h3: {
      colorPalette: "content",
      color: "colorPalette.text",
      fontSize: "xl",
      fontWeight: "500",
      "&:not(:first-child)": {
        mt: 6,
      },
      mb: 3,
      borderBottom: "1px solid",
      borderColor: "colorPalette.separator",
    },
    p: {
      my: 2,
    },
    figure: {
      p: 4,
    },
    ul: {
      listStyle: "outside",
      lineHeight: "normal",
      pl: 8,
    },
  },
});

export type ArticleVariants = RecipeVariantProps<typeof article>;
