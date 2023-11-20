"use client";

import React, { useContext } from "react";
import { NavContext } from "./nav";
import { NavOverlay } from "./navOverlay";
import NavMenuContent from "./navMenuContent";

export default function NavMenu() {
  const navContext = useContext(NavContext);

  return (
    <>
      <NavOverlay
        visible={navContext.isOpened}
        onClick={() => navContext.setOpened(false)}
      />
      <NavMenuContent visible={navContext.isOpened} />
    </>
  );
}
