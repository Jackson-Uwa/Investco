import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../../styles/logs/forgot_pass.module.css";

import arrow from "../../assets/arrow.png";
import dashboard from "../../assets/new-dash.png";

const ForgotPassword = (props) => {
  const [password, setPassword] = useState("");

  const changeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userLogs = {
      pass: password,
    };
    console.log(userLogs);
    setPassword("");
  };

  return (
    <div className={styles.forgotpass}>
      <div className={styles.signleft}>
        <div className={styles.container}>
          <h1>Forgot Password?</h1>
          <div className={styles.text}>
            No worries, we will send your reset instructions
          </div>
          <form onSubmit={submitHandler}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              onChange={changeHandler}
              placeholder="Enter your email address"
              value={password}
            />
            <input
              type="submit"
              className={styles.reset}
              value="Reset Password?"
            />
            <div className={styles.back}>
              <img src={arrow} alt="Arrow Icon" />
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <span id={styles.login}>Back To Login</span>
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

export default ForgotPassword;
