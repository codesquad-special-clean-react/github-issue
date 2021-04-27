import styles from "./index.module.scss";
import IssueTableRow from "../../molecules/issue-table-row";

const IssueTable = ({ labels }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th colSpan={4}>8 Labels</th>
        </tr>
      </thead>
      <tbody>
        {labels.map((label) => {
          return <IssueTableRow label={label} key={label.id} />;
        })}
      </tbody>
    </table>
  );
};

export default IssueTable;
