import { overlay } from "../recipes/overlay";
import { css } from "@/../styled-system/css";

type NavOverlayProps = {
  visible: boolean;
  onClick?: () => void;
};

export const NavOverlay = (props: NavOverlayProps) => {
  return (
    <div className={css({ hideFrom: "md" })}>
      <div
        className={overlay({
          visible: props.visible,
        })}
        onClick={props.onClick}
      />
    </div>
  );
};
