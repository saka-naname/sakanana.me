import { css } from "@/../styled-system/css";
import { container, grid } from "@/../styled-system/patterns";
import Card from "../components/ui/card";

export default function Home() {
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
          <Card
            src="/豊洲東雲_f3.png"
            alt="サンプル画像"
            title="前期お絵描き企画"
            description="前期お絵描き企画で展示した作品です．"
            href="https://github.com/saka-naname"
          />
          <Card
            src="/豊洲東雲_f3.png"
            alt="サンプル画像"
            title="前期お絵描き企画"
            description="前期お絵描き企画で展示した作品です．"
          />
          <Card
            src="/豊洲東雲_f3.png"
            alt="サンプル画像"
            title="前期お絵描き企画"
            description="前期お絵描き企画で展示した作品です．"
          />
          <Card
            src="/豊洲東雲_f3.png"
            alt="サンプル画像"
            title="前期お絵描き企画"
            description="前期お絵描き企画で展示した作品です．"
          />
        </div>
      </div>
    </div>
  );
}
