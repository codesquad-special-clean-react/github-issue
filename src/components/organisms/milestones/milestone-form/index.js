import styles from "./index.module.scss";
import { useContext, useState } from "react";
import { generateRandomNumber } from "../../../../utils/numbers";
import { postMilestone, putMilestone } from "../../../../apis/milestones";
import { useHistory, useRouteMatch } from "react-router-dom";
import { PATHS } from "../../../../constants/paths";
import { MilestonesContext } from "../../../pages/milestones/context";
import { addMilestone, updateMilestone } from "../../../../reducers/milestones";

const MilestoneForm = () => {
  const history = useHistory();
  const {
    state: { milestones },
    dispatch,
  } = useContext(MilestonesContext);
  const {
    params: { milestoneId },
  } = useRouteMatch();
  const initialState = milestoneId
    ? milestones.find((m) => m.id === parseInt(milestoneId, 10))
    : {
        title: "",
        dueDate: "",
        description: "",
        closedIssueCount: generateRandomNumber(0),
        openedIssueCount: generateRandomNumber(0),
      };
  const [milestone, setMilestone] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setMilestone((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createMilestone = () => {
    postMilestone({ params: milestone })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(addMilestone(json));
        history.push(PATHS.MILESTONES_PATH);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const editMilestone = () => {
    putMilestone({ milestoneId, params: milestone })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((json) => {
        dispatch(updateMilestone(json));
        history.push(PATHS.MILESTONES_PATH);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!milestoneId) {
      createMilestone();
    } else {
      editMilestone();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <header className={styles["form-header"]}>
        <div className={styles.title}>New milestone</div>
        <div className={styles.subscription}>
          Create a new milestone to help organize your issues and pull requests.
          Learn more about{" "}
          <span className={styles.info}>milestones and issues.</span>
        </div>
      </header>
      <hr />
      <div className={styles["form-group"]}>
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          id="title"
          value={milestone.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="dueDate">Due date (optional)</label>
        <input
          type="date"
          id="dueDate"
          value={milestone.dueDate && milestone.dueDate}
          name="dueDate"
          onChange={handleChange}
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="description">Description (optional)</label>
        <textarea
          rows={7}
          id="description"
          name="description"
          value={milestone.description}
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className={styles["form-button-container"]}>
        {milestoneId && (
          <>
            <button
              type="button"
              onClick={() => {
                history.push(PATHS.MILESTONES_PATH);
              }}
            >
              Cancel
            </button>
            <button type="button">Close milestone</button>
          </>
        )}
        <button className={styles["submit-button"]}>
          {milestoneId ? "Save changes" : "Create milestone"}
        </button>
      </div>
    </form>
  );
};
export default MilestoneForm;
