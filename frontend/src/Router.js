import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Stories from "./components/Stories";
import Home from "./components/Home";
import Detail from "./components/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/" component={Home} />
        <Route exact path="/stories/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
