"use client";

import { useContext } from "react";
import { NavContext } from "./nav";
import { NavButtonIcon } from "./navButtonIcon";

export default function NavButton() {
  const navContext = useContext(NavContext);

  return (
    <NavButtonIcon
      isChecked={navContext.isOpened}
      onClick={() => navContext.setOpened(!navContext.isOpened)}
    />
  );
}
