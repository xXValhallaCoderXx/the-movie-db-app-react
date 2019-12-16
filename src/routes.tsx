import React from "react";
import {hot} from "react-hot-loader";

import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

import {Home, NotFound} from "./pages";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={["/movies", "/movies/:movieID"]} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default hot(module)(Routes);
