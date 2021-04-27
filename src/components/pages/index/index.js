import { useState } from "react";
import styles from "./index.module.css";
import Header from "../../layouts/header";
import Main from "../../layouts/main";
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
  const [activeTab, setActiveTab] = useState(TABS.LABELS);
  const [openNewLabel, setOpenNewLabel] = useState(false);

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
          props: { setOpenNewLabel, openNewLabel },
        })}
      </Main>
    </main>
  );
};

export default Index;
