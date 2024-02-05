import Button from "./components/Button";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className="p-5 text-center font-bold text-3xl">Home page</h1>
      <Button>Add</Button>
    </main>
  );
};

export default Home;
