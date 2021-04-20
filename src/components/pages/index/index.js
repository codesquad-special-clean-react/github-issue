import styles from "./index.module.css";
import Header from "../../layouts/header";
import Main from "../../layouts/main";

const Index = () => {
  return (
    <main className={styles.index}>
      <Header />
      <Main />
    </main>
  );
};

export default Index;
