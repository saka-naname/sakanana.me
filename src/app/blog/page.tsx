import { css } from "@/../styled-system/css";
import { container, grid } from "@/../styled-system/patterns";
import Card from "../components/ui/card";
import { getAllBlogContents, type Blog } from "@/lib/microcms";

export default async function Home() {
  const posts = await getAllBlogContents();

  return (
    <div
      className={css({
        py: "6",
      })}
    >
      <h1
        className={css({
          colorPalette: "body",
          textAlign: "center",
          fontSize: "4xl",
          fontWeight: "bold",
          color: "colorPalette.title",
          mb: "4",
        })}
      >
        Blog
      </h1>
      <div
        className={container({
          colorPalette: "content",
          bgColor: "colorPalette.bg",
          color: "colorPalette.text",
          rounded: "md",
          py: "8",
        })}
      >
        <div
          className={grid({
            gap: 6,
            columns: {
              base: 1,
              md: 2,
              lg: 3,
              xl: 4,
              "2xl": 4,
            },
          })}
        >
          {posts.map((post: Blog, index) => {
            return (
              <Card
                key={index}
                src={post.eyecatch?.url}
                alt={post.title}
                title={post.title}
                description={post.description}
                href={`/blog/${post.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
