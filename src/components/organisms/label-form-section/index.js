import styles from "./index.module.scss";
import Label from "../../atoms/label";
import { useContext, useState } from "react";
import { getRandomColor } from "../../../utils/colors";
import { deleteLabel, postLabel, putLabel } from "../../../apis/labels";
import { LabelsContext } from "../../pages/labels/context";
import ActionButton from "../../atoms/action-button";
const LabelFormSection = ({
  setOpenLabelForm,
  labelId = null,
  isUpdate = false,
  defaultValue = {
    backgroundColor: getRandomColor(),
    name: "",
    description: "",
  },
}) => {
  const { backgroundColor, name, description } = defaultValue;

  const { setLabelsFromServer } = useContext(LabelsContext);
  const [color, setColor] = useState(backgroundColor);
  const [formData, setFormData] = useState({
    name,
    description,
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const initializeData = () => {
    setFormData({ name: "", description: "" });
    setColor(getRandomColor());
  };

  const handleSubmit = async (e) => {
    const params = {
      ...formData,
      backgroundColor: color,
      color: "#fff",
    };
    e.preventDefault();
    if (isUpdate) {
      await putLabel({ params, labelId });
      setOpenLabelForm(false);
    } else {
      await postLabel(params);
      initializeData();
    }
    setLabelsFromServer();
  };

  return (
    <section className={styles["new-label-section"]}>
      <div className={styles["container"]}>
        <div className={styles["preview"]}>
          <Label
            name={formData.name ? formData.name : "Label preview"}
            backgroundColor={color}
            color={"#fff"}
          />
          {isUpdate && (
            <ActionButton
              onClick={async () => {
                await deleteLabel(labelId);
                setLabelsFromServer();
                setOpenLabelForm(false);
              }}
            >
              Delete
            </ActionButton>
          )}
        </div>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <div className={styles["form-control"]}>
            <label htmlFor="name">Label name</label>
            <input
              value={formData.name}
              type="text"
              placeholder="Label name"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={formData.description}
              placeholder="Description"
              id="description"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className={styles["color-container"]}>
            <label>Color</label>
            <div className={styles["color-inner-container"]}>
              <button
                type="button"
                onClick={() => {
                  setColor(getRandomColor());
                }}
              >
                R
              </button>
              <div className={styles["color-panel"]}>{color}</div>
            </div>
          </div>

          <button
            className={styles["cancel-button"]}
            type="button"
            onClick={() => {
              setOpenLabelForm(false);
            }}
          >
            Cancel
          </button>
          <button
            className={styles["create-label-button"]}
            disabled={!formData.name || !formData.description}
          >
            {isUpdate ? "Save changes" : "Create label"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LabelFormSection;
