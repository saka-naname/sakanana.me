import { css, cva } from "@/../styled-system/css";
import { vstack } from "@/../styled-system/patterns";
import Link from "next/link";

const menuBg = cva({
  base: {
    position: "fixed",
    w: "screen",
    bgColor: "#FFF8EE",
    display: "none",
    pt: "56px",
    top: "0",
    transform: "translateY(-100%)",
    animation: "slideOut 0.2s ease-in-out 0s forwards",
    hideFrom: "md",
  },
  variants: {
    visible: {
      true: {
        display: "block",
        top: "0",
        transform: "translateY(0%)",
        animation: "slideIn 0.2s ease-in-out 0s forwards",
      },
    },
  },
});

const menuLink = css({
  color: "#595246",
  opacity: {
    base: "1",
    _hover: "0.8",
  },
  fontWeight: "bold",
  w: "full",
  py: "4",
  textAlign: "center",
});

export default function NavMenuContent(props: { visible: boolean }) {
  return (
    <div className={css({ hideFrom: "md" })}>
      <div
        className={menuBg({
          visible: props.visible,
        })}
      >
        <div className={vstack({ gap: "0" })}>
          <Link href="#" className={menuLink}>
            Works
          </Link>
          <Link href="#" className={menuLink}>
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
