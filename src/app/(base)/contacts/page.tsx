import Link from "next/link";
import React from "react";
import Heading from "../../components/Heading";

const Contacts = () => {
  return (
    <div>
      <Heading className="p-5 font-bold text-3xl" text="Contacts" />
      {/* <Link href="/contacts">Conatcts Page</Link> */}
    </div>
  );
};

export default Contacts;
