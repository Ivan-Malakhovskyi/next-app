import Heading from "./components/Heading";
import ErrorButton from "./components/ErrorButton";
import AddCompanyButton from "./components/add-company-button";

const Home = () => {
  return (
    <main className="m-auto">
      <Heading className="p-5 font-bold text-3xl " text="Home page " tag="h1" />

      <AddCompanyButton />

      <ErrorButton />
    </main>
  );
};

export default Home;
