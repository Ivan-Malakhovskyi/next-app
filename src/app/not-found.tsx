import Link from "next/link";
import React from "react";
import Heading from "./components/Heading";

const NotFoundError = () => {
  return (
    <div>
      <Heading tag="p" text="404" />
      <Heading className="text-red-500" text="Ooop such page not found 😥" />
      <Link href="/" className="text-gray-900">
        ⬅ Back to Home page
      </Link>
    </div>
  );
};

export default NotFoundError;
