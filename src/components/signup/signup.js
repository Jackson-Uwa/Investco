import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import styles from "../../styles/logs/signup.module.css";

import dashboard from "../../assets/new-dash.png";
import googleLens from "../../assets/googlelens.png";

const SignUp = (props) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    const show = visible;
    setVisible(!show);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(`Form values`, values);
    },

    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Username is required!";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }

      if (!values.phone) {
        errors.phone = "Phone number is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length <= 8) {
        errors.password = "Password must be at least 8 characters";
      }

      return errors;
    },
  });

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
              <form onSubmit={formik.handleSubmit}>
                <div className={styles.form_control}>
                  <label htmlFor="username">Name*</label>
                  <input
                    type="text"
                    name="username"
                    id={styles.username}
                    autoComplete="off"
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <p className={styles.error}>{formik.errors.username}</p>
                  )}
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id={styles.email}
                    autoComplete="off"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className={styles.error}>{formik.errors.email}</p>
                  )}
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="phone">Phone number*</label>
                  <input
                    type="text"
                    name="phone"
                    id={styles.phone}
                    autoComplete="off"
                    placeholder="Enter your phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className={styles.error}>{formik.errors.phone}</p>
                  )}
                </div>
                <label htmlFor="password">Password*</label>
                <div className={styles.form_group}>
                  <div className={styles.myinput}>
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      id={styles.password}
                      autoComplete="off"
                      placeholder="Enter your password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
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
                {formik.touched.password && formik.errors.password && (
                  <p className={styles.error}>{formik.errors.password}</p>
                )}

                <label id={styles.caveat}>
                  Password Must be at least 8 characters
                </label>

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
