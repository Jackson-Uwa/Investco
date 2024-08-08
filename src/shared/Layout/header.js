import { NavLink, Link } from "react-router-dom";
import styles from "../../styles/header.module.css";

import List from "../../components/list";
import { useState, Fragment } from "react";

const image = require("../../assets/investico.png");

const Header = (props) => {
  const [click, setClick] = useState(false);
  // const content = <List />;

  const changeClick = () => {
    const cl = click;
    setClick(!cl);
  };

  const closeBar = () => {
    setClick(false);
  };
  const sidebar = <List />;

  let content;
  if (click) {
    content = <List />;
  }
  return (
    <Fragment>
      <header className={styles.header} onClick={closeBar}>
        <div className={styles.list}>{content}</div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={image} id={styles.logo} alt="Logo" />
            </Link>
          </div>
          <div className={styles.side}>{sidebar}</div>
          <div className={styles.getStarted}>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              Get started
            </NavLink>
          </div>
          <span
            id={styles.bar}
            onClick={changeClick}
            class={click ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></span>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
