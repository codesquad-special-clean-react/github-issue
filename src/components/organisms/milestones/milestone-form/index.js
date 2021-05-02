import styles from "./index.module.scss";
import { useState } from "react";
import { generateRandomNumber } from "../../../../utils/numbers";
import { postMilestone } from "../../../../apis/milestones";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../../../constants/paths";

const MilestoneForm = () => {
  const history = useHistory();
  const [milestone, setMilestone] = useState({
    title: "",
    dueDate: "",
    description: "",
    closedIssueCount: generateRandomNumber(0),
    openedIssueCount: generateRandomNumber(0),
  });

  const handleChange = ({ target: { name, value } }) => {
    setMilestone((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postMilestone({ params: milestone })
      .then(() => {
        history.push(PATHS.MILESTONES_PATH);
      })
      .catch((e) => {
        alert(e.message);
      });
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
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className={styles["form-button-container"]}>
        <button>Create milestone</button>
      </div>
    </form>
  );
};
export default MilestoneForm;
