import styles from "./index.module.scss";

const MilestoneForm = () => {
  return (
    <form className={styles.form}>
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
        <input type="text" id="title" name="title" placeholder="Title" />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="dueDate">Due date (optional)</label>
        <input type="date" id="dueDate" name="dueDate" />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="description">Description (optional)</label>
        <textarea
          rows={7}
          id="description"
          name="description"
          placeholder="Description"
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
