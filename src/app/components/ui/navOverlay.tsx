import { overlay } from "../recipes/overlay";

type NavOverlayProps = {
  visible: boolean;
  onClick?: () => void;
};

export const NavOverlay = (props: NavOverlayProps) => {
  return (
    <div
      className={overlay({
        visible: props.visible,
      })}
      onClick={props.onClick}
    ></div>
  );
};
