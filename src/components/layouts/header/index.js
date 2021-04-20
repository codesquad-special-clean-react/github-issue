import { ReactComponent as Book } from "../../../assets/icons/book.svg";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Book style={{ width: 50, height: 50, color: "white" }} />
      ISSUES
    </header>
  );
};

export default Header;
