import { css } from "@/../styled-system/css";
import Link from "next/link";
import { flex, hstack, container } from "@/../styled-system/patterns";

const navLink = css({
  color: {
    base: "#FFFFFF",
    _hover: "#F2E8C9",
  },
  transition: "color 0.15s",
});

export default function NavBar() {
  return (
    <div
      className={css({
        position: "sticky",
        top: "0",
        left: "0",
        width: "full",
        bgColor: "#595246",
        p: "4",
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
        </div>
      </div>
    </div>
  );
}
