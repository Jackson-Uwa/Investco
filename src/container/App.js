import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "../shared/Layout/layout";

import Home from "../pages/home/home";
import Register from "../pages/register/register";
import Login from "../pages/log/login";
import PasswordPage from "../pages/forgot/forgot_pass";
import DashBoard from "../pages/dashboard/dashboard";

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
