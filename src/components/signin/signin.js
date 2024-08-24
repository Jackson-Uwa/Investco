import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import styles from "../../styles/logs/login.module.css";
import dashboard from "../../assets/new-dash.png";

const SignIn = (props) => {
  const [visibility, setVisibility] = useState(true);

  const ToggleVisibility = () => {
    const vs = visibility;
    setVisibility(!vs);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("User login details", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email address!";
      }

      if (!values.password) {
        errors.password = "User password is required!";
      } else if (values.password.length <= 8) {
        errors.password = "Password must be at least 8 characters";
      }

      return errors;
    },
  });

  return (
    <div className={styles.login}>
      <div className={styles.signleft}>
        <div className={styles.container}>
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Enter your email address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.error}>{formik.errors.email}</p>
            )}
            <label htmlFor="password">Password</label>
            <div className={styles.pass}>
              <input
                type={visibility ? "password" : "text"}
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Enter your password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              <span
                id={styles.eye}
                onClick={ToggleVisibility}
                class={
                  visibility
                    ? "fa-duotone fa-solid fa-eye-slash"
                    : "fa-solid fa-eye"
                }
              ></span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className={styles.error}>{formik.errors.password}</p>
            )}
            <p className={styles.forgot}>
              <NavLink to="/forgot-password">Forgot Password?</NavLink>
            </p>
            <input type="submit" value="Log In" id={styles.login} />
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
