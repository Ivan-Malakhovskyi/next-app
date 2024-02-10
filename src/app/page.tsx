import Layout from "./(base)/layout";
import Heading from "./components/Heading";
// import  from "./(base)/layout";

const Home = ({ children }) => {
  return (
    <Layout>
      <h1 className="p-5 text-center font-bold text-3xl">Home page</h1>
    </Layout>
  );
};

export default Home;

// <Heading className="p-5 font-bold text-3xl" text="Home" />
