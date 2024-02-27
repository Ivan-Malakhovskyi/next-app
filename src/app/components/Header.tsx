"use client";

import { FC } from "react";
import NavigationMenu from "./NavigationMenu";

const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-1000 p-[5px] bg-gray-900">
      <NavigationMenu />
    </header>
  );
};

export default Header;
