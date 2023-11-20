import { css } from "@/../styled-system/css";
import Link from "next/link";
import { flex, hstack, container } from "@/../styled-system/patterns";
import NavButton from "./navButton";

const navLink = css({
  color: {
    base: "#FFFFFF",
    _hover: "#F2E8C9",
  },
  transition: "color 0.15s",
  p: "2",
});

export default function NavBar() {
  return (
    <div
      className={css({
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "65535",
        width: "full",
        bgColor: "#595246",
        p: "2",
        fontWeight: "bold",
      })}
    >
      <div className={container()}>
        <div className={flex({ direction: "row", justify: "space-between" })}>
          <Link href="/" className={navLink}>
            <h1>sakanana.me</h1>
          </Link>
          <div className={hstack({ columnGap: "8", hideBelow: "md" })}>
            <Link href="#" className={navLink}>
              Works
            </Link>
            <Link href="#" className={navLink}>
              Blog
            </Link>
          </div>
          <div
            className={css({
              hideFrom: "md",
              color: "#ffffff",
            })}
          >
            <NavButton />
          </div>
        </div>
      </div>
    </div>
  );
}
