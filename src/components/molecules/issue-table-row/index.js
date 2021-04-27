import styles from "./index.module.scss";
import Label from "../../atoms/label";
import ActionButton from "../../atoms/action-button";
import { deleteLabel } from "../../../apis/labels";
import { useContext, useState } from "react";
import { LabelsContext } from "../../pages/labels/context";
import LabelFormSection from "../../organisms/label-form-section";

const IssueTableRow = ({ label }) => {
  const { setLabelsFromServer } = useContext(LabelsContext);
  const [openUpdate, setOpenUpdate] = useState(false);
  const { name, color, backgroundColor, description } = label;
  const handleDelBtnClick = (labelId) => async () => {
    await deleteLabel(labelId);
    setLabelsFromServer();
  };
  return (
    <tr className={styles.tr} key={label.id}>
      {openUpdate ? (
        <td>
          <LabelFormSection
            setOpenLabelForm={setOpenUpdate}
            isUpdate
            labelId={label.id}
            defaultValue={{
              name,
              backgroundColor,
              description,
            }}
          />
        </td>
      ) : (
        <>
          <td>
            <Label
              name={name}
              color={color}
              backgroundColor={backgroundColor}
            />
          </td>
          <td>{description}</td>
          <td>
            <div>
              <ActionButton onClick={() => setOpenUpdate(true)}>
                Edit
              </ActionButton>
              <ActionButton onClick={handleDelBtnClick(label.id)}>
                Delete
              </ActionButton>
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

export default IssueTableRow;
