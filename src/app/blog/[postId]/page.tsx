import { getAllBlogIds, getBlogDetail } from "@/lib/microcms";
import parse, { domToReact, Element } from "html-react-parser";
import { notFound } from "next/navigation";
import { container } from "@/../styled-system/patterns";
import { css } from "@/../styled-system/css";
import Link from "next/link";
import Image from "next/image";

export const dynamicParams = false;

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
        {post.title}
      </h1>
      <div
        className={container({
          maxW: "4xl",
          colorPalette: "content",
          bgColor: "colorPalette.bg",
          color: "colorPalette.text",
          rounded: "md",
          py: "8",
        })}
      >
        {parse(post.content, {
          replace(domNode) {
            if (domNode instanceof Element && domNode.attribs) {
              if (domNode.name === "a" && domNode.attribs.href) {
                return (
                  <Link href={domNode.attribs.href}>
                    {domToReact(
                      domNode.children.map((node) => node as Element),
                    )}
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
            }
          },
        })}
      </div>
    </div>
  );
}
