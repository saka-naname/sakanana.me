import type { Metadata } from "next";
import { NotoSansJP } from "@/styles/font";
import "./globals.css";
import { css } from "../../styled-system/css";
import Nav from "./components/ui/nav";

export const metadata: Metadata = {
  title: "sakanana.me",
  description: "A portfolio site of saka-naname",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${NotoSansJP.variable}`}>
      <body className={css({ fontFamily: "noto" })}>
        <Nav />
        <div className={css({ mt: "56px" })}>{children}</div>
      </body>
    </html>
  );
}
