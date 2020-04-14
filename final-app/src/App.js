import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Component/login.component";
import SignUp from "./Component/signup.component";
import Maps from "./Maps/maps";
import Conditions from "./Maps/conditions";
import Weather from "./Weather/weather";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Welcome to Michigan Trails!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/weather"}>Weather</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/conditions"}>Trail Conditions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Maps"}>Maps</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="good-wrap">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <Route path="/weather" component={Weather}/>
            <Route path="/Maps" component={Maps} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/conditions" component={Conditions} />
          </Switch>
      </div>
    </div></Router>
  );
}

export default App;