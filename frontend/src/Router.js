import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Stories from "./components/Stories";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Newstory from "./components/newStory";
function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/" component={Home} />
        <Route exact path="/stories/:id" component={Detail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/nueva" component={Newstory} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
