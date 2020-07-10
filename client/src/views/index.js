import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import T9 from "./T9";

export default () => (
  <Router>
    <Switch>
      <Route path="/about" children={<T9 />} />
      <Route path="/t9/:t9" children={<Home />} />
      <Route path="/" children={<Home />} />
    </Switch>
  </Router>
);
