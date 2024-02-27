"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const NavigationMenu: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <nav>
      <ul className="flex justify-between items-center color color-gray-600 ">
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
          <div>
            <button
              type="button"
              onClick={handleSignOut}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-solid border-gray-300 rounded"
            >
              SignOut
            </button>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
