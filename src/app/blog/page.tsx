import { css } from "@/../styled-system/css";
import { container, grid } from "@/../styled-system/patterns";
import { card } from "../components/recipes/card";
import Image from "next/image";

export default function Home() {
  const classes = card({});

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
          <div className={classes.root}>
            <div className={classes.imageWrapper}>
              <Image
                src="/豊洲東雲_f3.png"
                alt="晴海定期"
                fill={true}
                className={classes.image}
              />
            </div>
            <div className={classes.subContainer}>
              <h1 className={classes.title}>タイトル</h1>
              <p className={classes.description}>説明文</p>
            </div>
          </div>
          <div className={classes.root}>
            <div className={classes.imageWrapper}>
              <Image
                src="/豊洲東雲_f3.png"
                alt="晴海定期"
                fill={true}
                className={classes.image}
              />
            </div>
            <div className={classes.subContainer}>
              <h1 className={classes.title}>Title</h1>
              <p className={classes.description}>Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
