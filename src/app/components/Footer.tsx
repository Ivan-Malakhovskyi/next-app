import React from "react";
import Heading from "./Heading";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 absolute bottom-0 left-0 right-0 p-[10px]">
      <Heading tag="h3" text="footer" />
    </footer>
  );
};

export default Footer;
