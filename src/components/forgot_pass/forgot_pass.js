import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import styles from "../../styles/logs/forgot_pass.module.css";

import arrow from "../../assets/arrow.png";
import dashboard from "../../assets/new-dash.png";

const ForgotPassword = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("User Email", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "User email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Ooops, invalid email address!";
      }

      return errors;
    },
  });

  return (
    <div className={styles.forgotpass}>
      <div className={styles.signleft}>
        <div className={styles.container}>
          <h1>Forgot Password?</h1>
          <div className={styles.text}>
            No worries, we will send your reset instructions
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email address"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.error}>{formik.errors.email}</p>
            )}
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
