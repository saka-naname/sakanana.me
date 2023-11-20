"use client";

import React, { useContext } from "react";
import { NavContext } from "./nav";
import { NavOverlay } from "./navOverlay";

export default function NavMenu() {
  const navContext = useContext(NavContext);

  return (
    <>
      <NavOverlay
        visible={navContext.isOpened}
        onClick={() => navContext.setOpened(false)}
      />
    </>
  );
}
