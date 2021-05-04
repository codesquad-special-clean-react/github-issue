import { useHistory, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import { PATHS } from "../../../constants/paths";
import { MILESTONE_EDIT_URL_PATTERN } from "../../../utils/regex";

const Toolbar = ({ setOpenNewLabel }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const isMilestoneEditPage = MILESTONE_EDIT_URL_PATTERN.test(pathname);
  const eventMap = {
    [PATHS.MILESTONES_PATH]: () =>
      history.push(`${PATHS.MILESTONES_PATH}${PATHS.NEW_MILESTONE_PATH}`),
    [PATHS.LABELS_PATH]: () => setOpenNewLabel(true),
  };
  const buttonTextMap = {
    [PATHS.LABELS_PATH]: "New label",
    [PATHS.MILESTONES_PATH]: "New milestones",
  };
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
          style={
            pathname === PATHS.MILESTONES_PATH || isMilestoneEditPage
              ? activeStyle
              : null
          }
          onClick={handleTabClick(PATHS.MILESTONES_PATH)}
        >
          Milestones
        </button>
      </div>
      {!isMilestoneEditPage && (
        <button
          className={styles["new-label"]}
          onClick={() => eventMap[pathname]()}
        >
          {buttonTextMap[pathname]}
        </button>
      )}
    </div>
  );
};

export default Toolbar;
