import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "../page.module.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${styled.container}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
