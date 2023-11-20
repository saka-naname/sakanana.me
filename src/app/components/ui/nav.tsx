"use client";

import { useState } from "react";
import NavBar from "./navbar";
import React from "react";
import NavMenu from "./navMenu";

type TNavContext = {
  isOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavContext = React.createContext({} as TNavContext);

const NavProvider = (props: { children: React.ReactNode }) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <NavContext.Provider value={{ isOpened, setOpened }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default function Nav() {
  return (
    <>
      <NavProvider>
        <NavBar />
        <NavMenu />
      </NavProvider>
    </>
  );
}
