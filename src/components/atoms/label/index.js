import styles from "./index.module.css";
const Label = ({ name, color, backgroundColor }) => {
  return (
    <div
      className={styles.label}
      style={{
        color,
        backgroundColor,
      }}
    >
      {name}
    </div>
  );
};

export default Label;
