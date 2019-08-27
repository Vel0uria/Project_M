import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Stories from "./components/Stories";
import Home from "./components/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
