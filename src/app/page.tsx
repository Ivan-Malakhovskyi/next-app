import Heading from "./components/Heading";
import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <section>
        {" "}
        <Heading
          className="text-4xl font-bold mb-4"
          text="Welcome to Our Website"
          tag="h1"
        />
        <p className="text-lg mb-8">Explore and discover amazing content. </p>
        <Link
          href="/auth/signup"
          className="bg-white text-indigo-600 py-2 px-4 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          Get started
        </Link>
      </section>
    </main>
  );
};

export default Home;
