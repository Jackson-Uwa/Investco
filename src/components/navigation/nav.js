import styles from "../../styles/navigation/nav.module.css";
import List from "../comps/list";
import logo from "../../assets/investico.png";

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="Logo" />
      <List />
    </div>
  );
};

export default Nav;
