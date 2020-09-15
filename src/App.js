import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Favorite from "./components/Favorite/Favorite";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Search} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
