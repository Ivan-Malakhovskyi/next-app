import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styledContainer from "./page.module.css";

const mainFont = Plus_Jakarta_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <section className={styledContainer.container}>
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
