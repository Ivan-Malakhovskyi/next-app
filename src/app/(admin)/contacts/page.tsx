// "use client";

import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import { getAllContacts } from "../../api/service";
import { FC } from "react";

const Contacts: FC = async () => {
  const contacts = await getAllContacts();

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading className="py-5 font-bold text-3xl" text="Contacts" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {contacts.length > 0 ? (
          contacts.map(({ id, name, email }) => (
            <li
              key={id}
              className="bg-white p-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
            >
              <Link
                href={`/contacts/${id}`}
                className="text-black no-underline"
              >
                <strong className="text-xl">{name}</strong>
                <p className="text-gray-600">{email}</p>
              </Link>
            </li>
          ))
        ) : (
          <Heading
            className="p-5 font-bold text-3xl"
            text="Contacts is Empty"
          />
        )}
      </ul>
    </>
  );
};

export default Contacts;
