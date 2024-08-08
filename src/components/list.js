import { NavLink } from "react-router-dom";
import styles from "../styles/list.module.css";

const List = (props) => {
  return (
    <div className={styles.list}>
      <ul>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "#165BAC" }}
            to="/"
            id={styles.first}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            activeStyle={{ color: "#165BAC" }}
            to="/dashboard"
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
  );
};

export default List;
