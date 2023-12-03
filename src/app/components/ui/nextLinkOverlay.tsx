import Link from "next/link";
import { isLocalURL } from "next/dist/shared/lib/router/utils/is-local-url";
import { LinkOverlayStyles, linkOverlay } from "@/../styled-system/patterns";
import { cx } from "@/../styled-system/css";

type NextLinkOverlayProps = LinkOverlayStyles & {
  children?: React.ReactNode;
  className?: string;
  href: string;
  title?: string;
};

export default function NextLinkOverlay(props: NextLinkOverlayProps) {
  const linkOverlayStyles: LinkOverlayStyles = props;
  const className = cx(linkOverlay(linkOverlayStyles), props.className);
  return (
    <>
      {isLocalURL(props.href) ? (
        <Link className={className} href={props.href} title={props.title}>
          {props.children}
        </Link>
      ) : (
        // <Link>コンポーネントでGitHub等のOpen-In-App機能が正しく動作しない問題を回避
        <a className={className} href={props.href} title={props.title}>
          {props.children}
        </a>
      )}
    </>
  );
}
