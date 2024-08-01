import { NavLink, Link } from "react-router-dom";
import styles from "../../styles/header.module.css";

const image = require("../../assets/investico.png");

const sidebar = (
  <sidebar>
    <div className={styles.list}>
      <ul>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "#165BAC" }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "#165BAC" }}
            to="/"
          >
            How it works
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "#165BAC" }}
            to="/"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "#165BAC" }}
            to="/"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </sidebar>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={image} id={styles.logo} alt="Logo" />
          </Link>
        </div>
        <>{sidebar}</>
        <div className={styles.getStarted}>
          <NavLink to="/register" style={{ textDecoration: "none" }}>
            Get started
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
