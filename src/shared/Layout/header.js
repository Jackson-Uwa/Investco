import { NavLink, Link } from "react-router-dom";
import styles from "../../styles/layout/header.module.css";
import List from "../../components/comps/list";

const image = require("../../assets/investico.png");

const Header = (props) => {
  const sidebar = <List />;
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={image} id={styles.logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.side}>{sidebar}</div>
        <div className={styles.getStarted}>
          <NavLink to="/register" style={{ textDecoration: "none" }}>
            Get Started
          </NavLink>
        </div>
        <span
          id={styles.bar}
          onClick={props.click}
          class={props.check ? "fa-solid fa-times" : "fa-solid fa-bars"}
        ></span>
      </div>
    </header>
  );
};

export default Header;
