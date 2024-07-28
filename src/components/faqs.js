import styles from "../styles/faqs.module.css";
import dashboard from "../assets/new-dash.png";

const FAQS = (props) => {
  return (
    <div className={styles.faqs}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Frequently asked questions</h1>
          <div className={styles.questions}>
            <div className={styles.question}>
              What is investico
              <span class="fa-solid fa-plus" className={styles.icon}></span>
            </div>
            <hr />
            <div className={styles.question}>
              <div>Why should i use investico?</div>
              <div>
                <span class="fa-solid fa-minus" className={styles.icon}></span>
              </div>
            </div>
            <hr />
            <div className={styles.question}>
              Can I connect a Bank account to my
              <br /> Dashboard?
              <span class="fa-solid fa-plus" className={styles.icon}></span>
            </div>
            <hr />
            <div className={styles.question}>
              Wo! i am out of content
              <span class="fa-solid fa-plus" className={styles.icon}></span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.image}>
            <img src={dashboard} id={styles.dashboard} alt="Dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
