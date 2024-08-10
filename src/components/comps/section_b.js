import styles from "../../styles/comps/section_b.module.css";

import Folio from "../../assets/portfolio.png";
import Person from "../../assets/person.png";
import Valid from "../../assets/valid.png";
import Analytics from "../../assets/analyst.png";

const SectionB = (props) => {
  return (
    <div className={styles.sectionB}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.offering}>Offerings</div>
          <div className={styles.heading}>
            <h1>
              Get Many Advantages
              <br /> with our Platform
            </h1>
          </div>
        </div>
        <div className={styles.right}>
          <p id={styles.text}>
            We pride ourselves in our statistical data and let our customers see
            same.
          </p>
          <a href="learn.com" id={styles.learn}>
            Learn more
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.gridItem}>
            <img src={Folio} alt="icon" />
            <h2>Unlimited Portfolio Accounts</h2>
            <p className={styles.param}>
              A Comprehensive platform bridging the gap between investors
              bussiness owners
            </p>
          </div>

          <div className={styles.gridItem}>
            <img src={Person} alt="icon" />
            <h2>Get connected to potential investors</h2>
            <p className={styles.param}>
              A Comprehensive platform bridging the gap between investors
              bussiness owners
            </p>
          </div>

          <div className={styles.gridItem}>
            <img src={Valid} alt="icon" />
            <h2>Validation of potential investments</h2>
            <p className={styles.param}>
              A Comprehensive platform bridging the gap between investors
              bussiness owners
            </p>
          </div>

          <div className={styles.gridItem}>
            <img src={Analytics} alt="icon" />
            <h2>Full Analytics for you</h2>
            <p className={styles.param}>
              A Comprehensive platform bridging the gap between investors
              bussiness owners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
