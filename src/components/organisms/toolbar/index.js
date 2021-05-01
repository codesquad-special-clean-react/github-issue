import { useHistory, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import { PATHS } from "../../../constants/paths";

const Toolbar = ({ setOpenNewLabel }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const activeStyle = {
    color: "#fff",
    backgroundColor: "#0058fd",
    fontWeight: 600,
  };

  const handleTabClick = (link) => () => {
    history.push(link);
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles["button-group"]}>
        <button
          style={pathname === PATHS.LABELS_PATH ? activeStyle : null}
          onClick={handleTabClick(PATHS.LABELS_PATH)}
        >
          Labels
        </button>
        <button
          style={pathname === PATHS.MILESTONES_PATH ? activeStyle : null}
          onClick={handleTabClick(PATHS.MILESTONES_PATH)}
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
