import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Header from "../../layouts/header";
import Main from "../../layouts/main";
import { fetchLabels } from "../../../apis/labels";
import Toolbar from "../../organisms/toolbar";
import { TABS } from "../../../constants/common";
import Labels from "../labels";
import Milestones from "../milestones";

const renderPage = ({ tab, props }) => {
  const Component = { [TABS.LABELS]: Labels, [TABS.MILESTONES]: Milestones }[
    tab
  ];
  return <Component {...props} />;
};

const Index = () => {
  const [labels, setLabels] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS.LABELS);
  const [openNewLabel, setOpenNewLabel] = useState(false);

  useEffect(() => {
    fetchLabels()
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
        {renderPage({
          tab: activeTab,
          props: { labels, setOpenNewLabel, openNewLabel },
        })}
      </Main>
    </main>
  );
};

export default Index;
