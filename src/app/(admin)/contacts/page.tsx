import React from "react";
import Heading from "../../components/Heading";
import Head from "next/head";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading className="p-5 font-bold text-3xl" text="Contacts" />
    </>
  );
};

export default Contacts;
