"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Companies", path: "/companies" },
  { id: 3, title: "Contacts", path: "/contacts" },
];
{
  /* <Button onClick={() => signOut()}>Signout</Button> */
}
const NavigationMenu = () => {
  const pathname = usePathname();
  const session = useSession();

  // {
  // required: true,
  // onUnauthenticated() {
  //   redirect("/signin");
  // },
  // }

  return (
    <nav>
      <ul className="flex justify-between items-center color color-gray-600">
        <Link className="text-gray-100 " href="/">
          <Image
            src="/icons/ukraine.svg"
            alt="ukraine_logo"
            width={40}
            height={40}
          />
        </Link>
        {navigation.map(({ id, title, path }) => {
          const isActive = pathname === path;

          return (
            <li key={id}>
              <Link
                href={path}
                className={`text-gray-100 transition duration-300 hover:bg-orange-500 focus:bg-orange-500 border-transparent focus:outline-none rounded p-[5px] ${
                  isActive
                    ? "border border-orange-600 rounded bg-orange-600"
                    : ""
                }`}
              >
                {title}{" "}
              </Link>
            </li>
          );
        })}
        <div className="text-white">
          <span className="text-blue-400">Welcome </span>{" "}
          <span className="underline"> {session?.data?.user?.email}</span>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
