// "use client";

import Heading from "../../components/Heading";
import Head from "next/head";
import ErrorButton from "../../components/ErrorButton";

const Companies = () => {
  return (
    <>
      <Head>
        <title>Companies</title>
      </Head>
      <Heading className="p-5 font-bold text-3xl" text="Companies" />

      <ErrorButton />
    </>
  );
};

export default Companies;

// tsrafce
