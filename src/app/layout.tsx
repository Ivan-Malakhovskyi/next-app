import { Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

import { FC } from "react";
import { childrenType } from "../types";

const mainFont = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const RootLayout: FC<childrenType> = ({ children }) => {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
