import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../../styles/logs/login.module.css";
import dashboard from "../../assets/new-dash.png";

const SignIn = (props) => {
  const [visibility, setVisibility] = useState(true);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const ToggleVisibility = () => {
    const vs = visibility;
    setVisibility(!vs);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userLogs = {
      email: userDetails.email,
      password: userDetails.password,
    };

    console.log(userLogs);
  };

  return (
    <div className={styles.login}>
      <div className={styles.signleft}>
        <div className={styles.container}>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              required
              placeholder="Enter your email address"
              onChange={changeHandler}
              value={userDetails.email}
            />
            <label>Password</label>
            <div className={styles.pass}>
              <input
                type={visibility ? "password" : "text"}
                name="password"
                autoComplete="off"
                required
                placeholder="Enter your password"
                onChange={changeHandler}
                value={userDetails.password}
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
