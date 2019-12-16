import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Login</Link>
        <Link to="/protected">Bubbles</Link>

        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        {/* 
          Build a PrivateRoute component that wiZll 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
