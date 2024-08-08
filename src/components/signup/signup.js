import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../../styles/signup.module.css";

import dashboard from "../../assets/new-dash.png";
import googleLens from "../../assets/googlelens.png";

const SignUp = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userLogs = {
      username: name,
      mail: email,
      phone: phone,
      password: password,
    };

    console.log(userLogs);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

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
              <form onSubmit={submitHandler}>
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="off"
                  placeholder="Enter your name"
                  onChange={nameChangeHandler}
                  value={name}
                />
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  placeholder="Enter your email"
                  onChange={emailChangeHandler}
                  value={email}
                />
                <label>Phone number*</label>
                <input
                  type="text"
                  name="phone"
                  required
                  autoComplete="off"
                  placeholder="Enter your phone number"
                  onChange={phoneChangeHandler}
                  value={phone}
                />
                <label>Password*</label>

                <div className={styles.form_group}>
                  <div className={styles.myinput}>
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      required
                      autoComplete="off"
                      placeholder="Enter your password"
                      onChange={passwordChangeHandler}
                      value={password}
                    />
                  </div>

                  <div id={styles.eye}>
                    <span
                      class={
                        visible
                          ? "fa-solid fa-eye"
                          : "fa-duotone fa-solid fa-eye-slash"
                      }
                      onClick={toggle}
                    ></span>
                  </div>
                </div>
                <label id={styles.caveat}>Must be at least 8 characters</label>

                <input
                  className={styles.createAccount}
                  type="submit"
                  value="Create Account"
                />
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
