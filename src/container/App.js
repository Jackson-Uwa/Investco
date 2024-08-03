import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "../shared/Layout/layout";

import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import PasswordPage from "../pages/forgot_pass";
import DashBoard from "../pages/dashboard";
// import ForgotPassword from "../components/forgot_pass/forgot_pass";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <PasswordPage />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
