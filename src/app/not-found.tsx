"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Heading from "./components/Heading";
import { useRouter } from "next/navigation";

const NotFoundError = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="flex justify-center items-center  text-center ">
      {" "}
      <div>
        {" "}
        <Heading tag="h3" text="404" />
        <Heading
          tag="h4"
          className="text-red-500"
          text="Ooop such page not found 😥 "
        />
        <Link
          href="/"
          className="text-gray-900 transition duration-300 hover:text-blue-900 focus:text-blue-900"
        >
          ⬅ Back to Home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundError;
