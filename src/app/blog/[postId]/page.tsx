import { getAllBlogIds, getBlogDetail } from "@/lib/microcms";
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";
import { notFound } from "next/navigation";
import { container, hstack, vstack } from "@/../styled-system/patterns";
import { css, cx } from "@/../styled-system/css";
import { article, availableTagNames } from "@/app/components/recipes/article";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const dynamicParams = false;
export const revalidate = 900;

const classes = article();

const parser: HTMLReactParserOptions = {
  replace(domNode: DOMNode) {
    if (domNode instanceof Element && domNode.attribs) {
      if (domNode.name === "a" && domNode.attribs.href) {
        return (
          <Link href={domNode.attribs.href}>
            {domToReact(domNode.children.map((node) => node as Element))}
          </Link>
        );
      }

      if (
        domNode.name === "img" &&
        domNode.attribs.src &&
        domNode.attribs.width &&
        domNode.attribs.height
      ) {
        return (
          <Image
            src={domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={parseInt(domNode.attribs.width)}
            height={parseInt(domNode.attribs.height)}
          />
        );
      }

      if (availableTagNames.includes(domNode.name)) {
        domNode.attribs.className = classes[domNode.name] || "";
        return domNode;
      }
    }
  },
};

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string };
}): Promise<Metadata> {
  const post = await getBlogDetail(postId);

  return {
    title: `${post.title} - sakanana.me`,
    description: post.description,
    metadataBase: new URL("https://sakanana.me"),
  };
}

export async function generateStaticParams() {
  const ids = await getAllBlogIds();

  const paths = ids.map((id) => {
    return {
      postId: id,
    };
  });

  return [...paths];
}

export default async function StaticBlogPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getBlogDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <div
      className={css({
        py: 6,
      })}
    >
      <div
        className={cx(
          container({
            mt: 4,
            mb: 10,
          }),
          vstack({ gap: 4 }),
        )}
      >
        {post.eyecatch ? (
          <div
            className={css({
              bgColor: "#FFFFFF",
              p: {
                base: 4,
                mdDown: 2,
              },
              maxW: "2xl",
            })}
          >
            <Image
              src={post.eyecatch.url}
              alt="アイキャッチ画像"
              width={post.eyecatch.width}
              height={post.eyecatch.height}
              loading="eager"
              className={css({
                objectFit: "cover",
              })}
            ></Image>
          </div>
        ) : (
          <></>
        )}
        <h1
          className={css({
            colorPalette: "body",
            textAlign: "center",
            fontSize: {
              base: "4xl",
              mdDown: "2xl",
            },
            fontWeight: "bold",
            color: "colorPalette.title",
          })}
        >
          {post.title}
        </h1>
        <div
          className={hstack({
            display: "flex",
            justifyContent: "center",
            gap: 4,
            colorPalette: "content",
            color: "colorPalette.text.secondary",
          })}
        >
          <p>
            公開:
            {new Date(post.publishedAt || post.createdAt).toLocaleDateString(
              "ja-JP",
              {
                timeZone: "Asia/Tokyo",
              },
            )}
          </p>
          {post.updatedAt !== (post.publishedAt || post.createdAt) ? (
            <p>
              更新:
              {new Date(post.updatedAt).toLocaleDateString("ja-JP", {
                timeZone: "Asia/Tokyo",
              })}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div
        className={cx(
          container({
            maxW: "4xl",
            colorPalette: "content",
            bgColor: "colorPalette.bg",
            color: "colorPalette.text",
            rounded: { base: "md", mdDown: "unset" },
            py: "8",
          }),
        )}
      >
        {parse(post.content, parser)}
      </div>
    </div>
  );
}
