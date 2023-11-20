import { toggleIcon, type ToggleIconVariants } from "../recipes/toggleIcon";
import { IoMenu, IoClose } from "react-icons/io5";

type ButtonProps = {
  onClick?: () => void;
};

export const NavButtonIcon = (props: ToggleIconVariants & ButtonProps) => {
  const classes = toggleIcon(props);
  return (
    <button className={classes.root} onClick={props.onClick}>
      <span className={classes.iconUnchecked}>
        <IoMenu />
      </span>
      <span className={classes.iconChecked}>
        <IoClose />
      </span>
    </button>
  );
};
