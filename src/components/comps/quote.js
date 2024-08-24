import { Fragment } from "react";
import styles from "../../styles/comps/quote.module.css";

import curlyQuote from "../../assets/column.png";
import portrait from "../../assets/portrait.png";

const Quote = (props) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <img className={styles.brace} src={curlyQuote} alt="quote" />
        <div className={styles.quote}>
          <div className={styles.content}>
            <h2>
              The _Investico Investment dashboard platform which I think is the
              best I have ever tried, displays very valuable Information with a
              pleasant user Interface
            </h2>
            {/* <hr /> */}
            <div className={styles.details}>
              <div className={styles.imgWrapper}>
                <img src={portrait} alt="portrait" id={styles.portrait} />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>Felicia Badmus</span>
                <span className={styles.text}>
                  Software Engineer at Gumball
                </span>
              </div>
            </div>
            <div className={styles.nav}>
              <p>
                <span
                  id={styles.leftCaret}
                  class="fa-solid fa-caret-left"
                ></span>
                <span
                  id={styles.rightCaret}
                  class="fa-solid fa-caret-right"
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Quote;
