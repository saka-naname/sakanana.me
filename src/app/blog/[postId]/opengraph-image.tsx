import { getBlogDetail } from "@/lib/microcms";
import { loadGoogleFont } from "@/lib/font";
import { ImageResponse } from "next/og";
import backgroundImage from "@/../public/ogpbg.png";

export const runtime = "edge";
export const revaliate = 60;

export const alt = "記事のアイキャッチ画像";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function og({
  params: { postId },
}: {
  params: { postId: string };
}) {
  try {
    const post = await getBlogDetail(postId);

    const yomogiArrayBuffer = await loadGoogleFont({
      family: "Yomogi",
      weight: 400,
      text: post.title + "aekmns.",
    });

    const backgroundImageUrl = new URL(
      backgroundImage.src,
      "https://sakanana.me",
    );

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: `url(${backgroundImageUrl.toString()})`,
            backgroundColor: "#000000",
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 60,
          }}
        >
          <div
            style={{
              width: "100%",
              fontSize: 60,
              color: "#ffffff",
              padding: "0 160px",
              wordWrap: "break-word",
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              width: "100%",
              fontSize: 40,
              color: "#ffffff",
              padding: "0 160px",
              wordWrap: "break-word",
            }}
          >
            sakanana.me
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Yomogi",
            data: yomogiArrayBuffer,
            weight: 400,
            style: "italic",
          },
        ],
      },
    );
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate image.", { status: 500 });
  }
}
