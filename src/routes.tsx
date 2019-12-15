import React from "react";
import {hot} from "react-hot-loader";

import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

import {Home, NotFound, Pagination} from "./pages";

const history = createBrowserHistory();

const exampleQuotes = [
  {
    theme: "games",
    text: "games q1"
  },
  {
    theme: "games",
    text: "games q2"
  },
  {
    theme: "games",
    text: "games q3"
  },
  {
    theme: "games",
    text: "games q4"
  },
  {
    theme: "games",
    text: "games q5"
  },
  {
    theme: "movies",
    text: "movies q1"
  },
  {
    theme: "movies",
    text: "movies q2"
  },
  {
    theme: "movies",
    text: "movies q3"
  }
];

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
      <Route
          exact
          path="/page"
          render={() => <Pagination quotes={exampleQuotes} />}
        />
        <Route exact path={["/", "/:movieID"]} component={Home} />
      
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default hot(module)(Routes);
