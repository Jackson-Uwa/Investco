import { NavLink } from "react-router-dom";
import styles from "../../styles/login.module.css";
import dashboard from "../../assets/new-dash.png";

const SignIn = (props) => {
  return (
    <div className={styles.login}>
      <div className={styles.signleft}>
        <div className={styles.container}>
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email address"
              value=""
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              value=""
            />
            <p className={styles.forgot}>
              <NavLink to="/forgot-password">Forgot Password?</NavLink>
            </p>
            <p id={styles.login}>Log In</p>
            <div className={styles.noAccount}>
              Dont Have An Account?
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "#165bac" }}
              >
                <span id={styles.signup}>Sign up for free</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.signright}>
        <div className={styles.bgimg}>
          <img id={styles.dash} src={dashboard} alt="dashboard" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
