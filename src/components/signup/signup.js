import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../../styles/logs/signup.module.css";

import dashboard from "../../assets/new-dash.png";
import googleLens from "../../assets/googlelens.png";

const SignUp = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [visible, setVisible] = useState(false);

  const toggle = () => {
    const show = visible;
    setVisible(!show);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userLogs = {
      username: values.username,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };

    console.log(userLogs);
  };

  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
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
                  name="username"
                  required
                  autoComplete="off"
                  placeholder="Enter your name"
                  onChange={changeHandler}
                  value={values.username}
                />
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  placeholder="Enter your email"
                  onChange={changeHandler}
                  value={values.email}
                />
                <label>Phone number*</label>
                <input
                  type="text"
                  name="phone"
                  required
                  autoComplete="off"
                  placeholder="Enter your phone number"
                  onChange={changeHandler}
                  value={values.phone}
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
                      onChange={changeHandler}
                      value={values.password}
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
                  disabled={false}
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
