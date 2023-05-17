import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Communications from "./pages/Communications";

const MyRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/communications" component={Communications} />
      </Switch>
    </Router>
  );
};

export default MyRouter;
