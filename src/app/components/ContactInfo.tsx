"use client";

import { FC } from "react";
import Heading from "./Heading";
import Link from "next/link";
import { contactType } from "../../types";

interface ContactInfoProps {
  contact: contactType;
}

const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, city, zipcode, phone } = address || {};

  if (!contact) {
    return <Heading tag="p" text="Contact is Empty" />;
  }

  return (
    <>
      <div className="bg-white p-6 rounded-md shadow-md">
        <Heading tag="h1" text={name} className="text-2xl font-semibold mb-4" />
        <Heading tag="h2" text={email} className="text-md font-semibold mb-4" />
        <p className="text-gray-600 mb-4">{phone}</p>
        <p className="text-gray-600 mb-4">{street}</p>
        <p className="text-gray-600 mb-4">{city}</p>
        <p className="text-gray-600 mb-4">{zipcode}</p>
      </div>

      <Link
        href="/contacts"
        className="block text-blue-500 hover:underline mt-[40px]"
      >
        ⬅️ Back to the List of your contacts
      </Link>
    </>
  );
};

export default ContactInfo;
