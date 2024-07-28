import styles from "../../styles/header.module.css";

const image = require("../../assets/investico.png");

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={image} id={styles.logo} alt="Logo" />
        </div>
        <div className={styles.list}>
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.getStarted}>
          <a href="www.google.com">Get started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
