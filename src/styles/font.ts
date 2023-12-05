import {
  Noto_Sans_JP,
  Yomogi as GFYomogi,
  Cabin_Sketch,
} from "next/font/google";

export const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const Yomogi = GFYomogi({
  weight: ["400"],
  display: "block",
  variable: "--font-yomogi",
  subsets: ["latin"],
});

export const CabinSketch = Cabin_Sketch({
  weight: ["700"],
  display: "block",
  variable: "--font-cabin-sketch",
  subsets: ["latin"],
});
