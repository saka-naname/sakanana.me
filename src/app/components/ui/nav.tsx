"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const escapeKeyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpened(false);
      }
    };

    document.addEventListener("keydown", escapeKeyHandler);

    return () => {
      document.removeEventListener("keydown", escapeKeyHandler);
    };
  }, []);

  useEffect(() => {
    setOpened(false);
  }, [pathname, searchParams]);

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
