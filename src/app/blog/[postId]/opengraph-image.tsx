import { getBlogDetail } from "@/lib/microcms";
import { loadGoogleFont } from "@/lib/font";
import { ImageResponse } from "next/og";

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
    const yomogiArrayBuffer = await loadGoogleFont({
      family: "Yomogi",
      weight: 400,
    });

    const post = await getBlogDetail(postId);

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: "url(/ogpbg.png)",
            backgroundColor: "#000000",
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              width: "100%",
              fontSize: 60,
              color: "#ffffff",
              padding: "0 120px",
              wordWrap: "break-word",
            }}
          >
            {post.title}
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
