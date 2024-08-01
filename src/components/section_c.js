import { NavLink } from "react-router-dom";
import styles from "../styles/section_c.module.css";

import code from "../assets/code.png";
// import graph from "../assets/graph.png";

const SectionC = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Equal Investment
            <br />
            Opportunity For Everyone
          </h1>
          <p className={styles.param}>
            A Comprehensive platform bridging the gap between Investors and
            Investee. A Comprehensive platform bridging the gap between
            Investors and Investee.
          </p>
          <NavLink to="/register">
            <a href="www.google.com" id={styles.started}>
              Get Started
            </a>
          </NavLink>
        </div>
        <div className={styles.right}>
          <img src={code} alt="programmer" />
        </div>
      </div>
    </div>
  );
};

export default SectionC;
