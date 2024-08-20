import styles from "../../styles/layout/footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer} onClick={props.close}>
      <div className={styles.wrapper}>
        <div className={styles.top_footer}>
          <div className={styles.left}>
            <h1 className={styles.heading}>_Investico</h1>
            <p className={styles.param}>
              Bridging the gap between investors and business owners.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h3>Company</h3>
              <ol>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Pricing</li>
              </ol>
            </div>
            <div>
              <h3>Product</h3>
              <ol>
                <li>Invoicing Platform</li>
                <li>Accounting Platform</li>
                <li>Create Proposal</li>
                <li>Contracts</li>
              </ol>
            </div>
            <div>
              <h3>Resources</h3>
              <ol>
                <li>Proposal Template</li>
                <li>Invoice Template</li>
                <li>Tutorial</li>
                <li>How to write a contract</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className={styles.line}></div>
        <div className={styles.low_footer}>
          <p id={styles.copy}>
            2023 Big_Tee. All rights reserved. -- Privacy Policy - Terms of
            Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
