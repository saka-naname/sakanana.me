import { sva, type RecipeVariantProps } from "@/../styled-system/css";

export const article = sva({
  slots: ["h1", "h2", "h3", "h4", "h5", "p", "figure", "a"],
});

export type ArticleVariants = RecipeVariantProps<typeof article>;
