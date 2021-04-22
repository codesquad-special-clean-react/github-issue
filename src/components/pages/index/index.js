import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Header from "../../layouts/header";
import Main from "../../layouts/main";
import IssueTable from "../../organisms/issue-table";
import { fetchLabels } from "../../../apis/labels";
import Toolbar from "../../organisms/toolbar";
import { TABS } from "../../../constants/common";
import NewLabelSection from "../../organisms/new-label-section";

const Index = () => {
  const [labels, setLabels] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS.LABELS);
  const [openNewLabel, setOpenNewLabel] = useState(false);

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
        <Toolbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setOpenNewLabel={setOpenNewLabel}
        />
        {activeTab === TABS.LABELS ? (
          <>
            {openNewLabel && (
              <NewLabelSection setOpenNewLabel={setOpenNewLabel} />
            )}
            <IssueTable labels={labels} />
          </>
        ) : (
          "UNDER CONSTRUCTION"
        )}
      </Main>
    </main>
  );
};

export default Index;
