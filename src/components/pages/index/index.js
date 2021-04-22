import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Header from "../../layouts/header";
import Main from "../../layouts/main";
import IssueTable from "../../organisms/issue-table";
import { fetchLabels } from "../../../apis/labels";

const Index = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetchLabels()
      .then((response) => response.json())
      .then((data) => {
        setLabels(data);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  return (
    <main className={styles.index}>
      <Header />
      <Main>
        <IssueTable labels={labels} />
      </Main>
    </main>
  );
};

export default Index;
