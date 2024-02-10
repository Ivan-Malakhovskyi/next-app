import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
