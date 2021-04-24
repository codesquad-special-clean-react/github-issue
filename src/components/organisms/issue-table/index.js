import styles from "./index.module.scss";
import Label from "../../atoms/label";
import ActionButton from "../../atoms/action-button";
import { deleteLabel } from "../../../apis/labels";
import { useContext } from "react";
import { LabelsContext } from "../../pages/labels/context";

const IssueTable = ({ labels }) => {
  const { setLabelsFromServer } = useContext(LabelsContext);
  const handleDelBtnClick = (labelId) => async () => {
    await deleteLabel(labelId);
    setLabelsFromServer();
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th colSpan={4}>8 Labels</th>
        </tr>
      </thead>
      <tbody>
        {labels.map((label) => {
          return (
            <tr className={styles.tr} key={label.id}>
              <td>
                <Label
                  name={label.name}
                  color={label.color}
                  backgroundColor={label.backgroundColor}
                />
              </td>
              <td>{label.description}</td>
              <td>
                <div>
                  <ActionButton>Edit</ActionButton>
                  <ActionButton onClick={handleDelBtnClick(label.id)}>
                    Delete
                  </ActionButton>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default IssueTable;
