import styles from "./index.module.scss";
import { TABS } from "../../../constants/common";
const Toolbar = ({ activeTab, setActiveTab, setOpenNewLabel }) => {
  const activeStyle = {
    color: "#fff",
    backgroundColor: "#0058fd",
    fontWeight: 600,
  };

  const handleTabClick = (tab) => () => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles["button-group"]}>
        <button
          style={activeTab === TABS.LABELS ? activeStyle : null}
          onClick={handleTabClick(TABS.LABELS)}
        >
          Labels
        </button>
        <button
          style={activeTab === TABS.MILESTONES ? activeStyle : null}
          onClick={handleTabClick(TABS.MILESTONES)}
        >
          Milestones
        </button>
      </div>

      <button
        className={styles["new-label"]}
        onClick={() => setOpenNewLabel(true)}
      >
        New label
      </button>
    </div>
  );
};

export default Toolbar;
