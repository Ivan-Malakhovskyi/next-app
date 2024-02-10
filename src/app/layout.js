import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const mainFont = Plus_Jakarta_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
