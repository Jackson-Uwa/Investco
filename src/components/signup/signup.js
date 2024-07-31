import { NavLink } from "react-router-dom";
import styles from "../../styles/signup.module.css";

import dashboard from "../../assets/new-dash.png";
import googleLens from "../../assets/googlelens.png";

const SignUp = (props) => {
  return (
    <div className={styles.signup}>
      <div className={styles.signleft}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>
              Join our network today!
              <br />
              Start Investing and funding.
            </h1>
            <p id={styles.signwithgoogle}>
              <img
                id={styles.google}
                src={googleLens}
                alt="Google Icon"
                class="fa-solid fa-google"
              ></img>
              Sign Up With Google
            </p>
            <div className={styles.form}>
              <form>
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter your name"
                  value=""
                />
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  value=""
                />
                <label>Phone number*</label>
                <input
                  type="text"
                  name="phone"
                  autoComplete="off"
                  placeholder="Enter your phone number"
                  value=""
                />
                <label>Password*</label>

                <div className={styles.form_group}>
                  <div className={styles.myinput}>
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Enter your password"
                      value=""
                    />
                  </div>

                  <div id={styles.eye}>
                    <span class="fa-solid fa-eye"></span>
                  </div>
                </div>
                <label id={styles.caveat}>Must be at least 8 characters</label>

                <div className={styles.createAccount}>Create Account</div>
                <div className={styles.existingAccount}>
                  Already Have An Account?
                  <span>
                    <NavLink id={styles.login} to="/login">
                      Log In
                    </NavLink>
                  </span>
                </div>
              </form>
            </div>
          </div>
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

export default SignUp;
