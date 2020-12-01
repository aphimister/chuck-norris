import "./App.css";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Keywords from "./components/Keywords";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/keywords" component={Keywords} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
