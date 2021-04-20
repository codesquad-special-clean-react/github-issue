import styles from "./index.module.css";
import IssueTable from "../../organisms/issue-table";

const Main = () => {
  return (
    <main className={styles.main}>
      <IssueTable />
    </main>
  );
};

export default Main;
