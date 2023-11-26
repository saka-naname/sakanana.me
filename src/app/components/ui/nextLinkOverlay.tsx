import Link from "next/link";
import { isLocalURL } from "next/dist/shared/lib/router/utils/is-local-url";
import { LinkOverlayStyles, linkOverlay } from "@/../styled-system/patterns";

type NextLinkOverlayProps = LinkOverlayStyles & {
  children?: React.ReactNode;
  href: string;
  title?: string;
};

export default function NextLinkOverlay(props: NextLinkOverlayProps) {
  const linkOverlayStyles: LinkOverlayStyles = props;
  return (
    <>
      {isLocalURL(props.href) ? (
        <Link
          className={linkOverlay(linkOverlayStyles)}
          href={props.href}
          title={props.title}
        >
          {props.children}
        </Link>
      ) : (
        // <Link>コンポーネントでGitHub等のOpen-In-App機能が正しく動作しない問題を回避
        <a
          className={linkOverlay(linkOverlayStyles)}
          href={props.href}
          title={props.title}
        >
          {props.children}
        </a>
      )}
    </>
  );
}
