import styles from "./index.module.scss";

const ActionButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default ActionButton;
