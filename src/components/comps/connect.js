import styles from "../../styles/comps/connect.module.css";

import photo from "../../assets/mac.png";

const Connect = (props) => {
  return (
    <div className={styles.connect}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            Let's connect with Investors
            <br /> or get funding today!
          </h2>
          <p className={styles.param}>
            A Comprehensive platform bridging the gap between investors and
            investee.
          </p>
          <a id={styles.free} href="www.google.com">
            Try Investico For Free
          </a>
        </div>
        <div className={styles.right}>
          <img src={photo} alt="Mac Computer" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
