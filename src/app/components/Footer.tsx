import React, { FC } from "react";
import SocialLinks from "./SocialLinks";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 p-[40px] mt-[60px] text-center">
      <SocialLinks />
    </footer>
  );
};

export default Footer;
