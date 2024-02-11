import React from "react";
import NavigationMenu from "./NavigationMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-1000 p-[8px] bg-gray-900">
      <NavigationMenu />
    </header>
  );
};

export default Header;
