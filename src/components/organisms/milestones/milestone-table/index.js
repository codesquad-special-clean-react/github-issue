import styles from "./index.module.scss";
import { useContext } from "react";
import { MilestonesContext } from "../../../pages/milestones/context";
import { deleteMilestone } from "../../../../apis/milestones";
import { removeMilestone } from "../../../../reducers/milestones";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../../../constants/paths";

const MilestoneTable = () => {
  const {
    state: { milestones },
    dispatch,
  } = useContext(MilestonesContext);
  const getIssueCount = (key) => {
    return milestones.reduce((acc, milestone) => {
      return acc + milestone[key];
    }, 0);
  };
  const history = useHistory();
  const openedIssueCount = getIssueCount("openedIssueCount");
  const closedIssueCount = getIssueCount("closedIssueCount");
  const handleClickDelButton = (id) => () => {
    deleteMilestone(id)
      .then(() => {
        dispatch(removeMilestone(id));
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const handleClickEditButton = (id) => () => {
    history.push(`${PATHS.MILESTONES_PATH}/${id}/edit`);
  };
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th colSpan={4}>
            <span>{openedIssueCount} Open</span>
            <span>{closedIssueCount} Closed</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {milestones.map(
          ({
            id,
            title,
            dueDate,
            description,
            openedIssueCount,
            closedIssueCount,
          }) => {
            const progressPercent = (
              (closedIssueCount / (closedIssueCount + openedIssueCount)) *
              100
            ).toFixed(0);

            return (
              <tr className={styles.tr} key={id}>
                <td>
                  <div className={styles["container"]}>
                    <div className={styles.title}>{title}</div>
                    <div>Due by {dueDate}</div>
                    <div>{description}</div>
                  </div>
                </td>
                <td>
                  <div className={styles["container"]}>
                    <div>
                      <div className={styles["progress-bar"]}>
                        <div
                          className={styles["progress"]}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <span>{progressPercent}% complete</span>
                      <span>{openedIssueCount} open</span>
                      <span>{closedIssueCount} closed</span>
                    </div>
                    <div className={styles["button-group"]}>
                      <button
                        className={styles.edit}
                        onClick={handleClickEditButton(id)}
                      >
                        Edit
                      </button>
                      <button className={styles.edit}>Close</button>
                      <button
                        className={styles.delete}
                        onClick={handleClickDelButton(id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default MilestoneTable;
