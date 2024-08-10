import List from "../comps/list";
import styles from "../../styles/navigation/nav.module.css";

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <h1>Navigation</h1>
      <List />
    </div>
  );
};

export default Nav;
