import styles from "./index.module.scss";

const ActionButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default ActionButton;
