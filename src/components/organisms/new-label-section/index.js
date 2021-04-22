import styles from "./index.module.scss";
import Label from "../../atoms/label";
import { useState } from "react";
import { getRandomColor } from "../../../utils/colors";
const NewLabelSection = ({ setOpenNewLabel }) => {
  const [color, setColor] = useState(getRandomColor());
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        </div>
        <form className={styles["form"]}>
          <div className={styles["form-control"]}>
            <label htmlFor="name">Label name</label>
            <input
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
              setOpenNewLabel(false);
            }}
          >
            Cancel
          </button>
          <button
            className={styles["create-label-button"]}
            disabled={!formData.name || !formData.description}
          >
            Create label
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewLabelSection;
