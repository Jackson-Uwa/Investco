import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "../shared/Layout/layout";

import Home from "../pages/home";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
