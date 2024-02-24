import React from "react";
import Heading from "../../../components/Heading";
import ContactInfo from "../../../components/ContactInfo";
import { getContactById } from "../../../api/service";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }];
};

const Contact = async ({ params }) => {
  const contact = await getContactById(params);

  return (
    <>
      <Heading className="py-5 font-bold text-3xl" text="Contact Details" />
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
