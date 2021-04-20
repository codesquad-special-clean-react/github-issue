import styles from "./index.module.scss";

const IssueTable = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th colSpan={4}>8 Labels</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tr}>
          <td>bug</td>
          <td>Something isn't wrong</td>
          <td>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default IssueTable;
