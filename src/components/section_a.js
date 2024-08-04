import { NavLink } from "react-router-dom";
import styles from "../styles/section_a.module.css";

import image1 from "../assets/pf1.png";
import image2 from "../assets/pf2.png";
import image3 from "../assets/pf3.png";
import image4 from "../assets/pf4.png";
import image5 from "../assets/pf5.png";

import dashboard from "../assets/Dashboard.jpg";

const SectionA = (props) => {
  return (
    <div className={styles.sectionA}>
      <div className={styles.heading}>Investment platform</div>
      <div className={styles.content}>
        <h1>
          Invest or get funding
          <br /> for your business
        </h1>
        <p className={styles.param}>
          A comprehensive platform, bridging the gap between the investors and
          investee.
        </p>
        <div className={styles.top}>
          <ul className={styles.face_icons}>
            <li>
              <img src={image1} alt="elipses" />
            </li>
            <li>
              <img src={image2} alt="elipses" />
            </li>
            <li>
              <img src={image3} alt="elipses" />
            </li>
            <li>
              <img src={image4} alt="elipses" />
            </li>
            <li>
              <img src={image5} alt="elipses" />
            </li>
          </ul>
          <div className={styles.members}>
            Members Now 23k
            <span id={styles.caret} class="fa-solid fa-caret-right"></span>
          </div>
        </div>
        <div className={styles.detailCon}>
          <span id={styles.works}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#ffff",
                // fontFamily: "mukta",
                padding: "12px 25px",
                background: "#000",
                borderRadius: "10px",
                fontFamily: "mukta",
                fontSize: "18px",
                letterSpacing: "0px",
              }}
              // activeStyle={{ color: "#165BAC" }}
              to="/register"
            >
              Get started
            </NavLink>
          </span>
          <NavLink
            style={{ textDecoration: "none", color: "#0000" }}
            to="/dashboard"
          >
            <span id={styles.see}>See how it works</span>
          </NavLink>
        </div>
        <div className={styles.mainframe}>
          <img src={dashboard} alt="dashboard" />
        </div>
      </div>
    </div>
  );
};
export default SectionA;
