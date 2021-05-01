import styles from "./index.module.scss";

const MilestoneTable = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th colSpan={4}>
            <span>2 Open</span>
            <span>0 Closed</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tr}>
          <td>tes</td>
          <td>tes</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MilestoneTable;
