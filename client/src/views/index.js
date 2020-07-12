import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default () => (
  <Router>
    <Switch>
      <Route path="/about" children={<About />} />
      <Route path="/t9/:t9" children={<Home />} />
      <Route path="/" children={<Home />} />
    </Switch>
  </Router>
);
