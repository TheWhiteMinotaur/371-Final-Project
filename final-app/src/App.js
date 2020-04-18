import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Component/login.component";
import SignUp from "./Component/signup.component";
import Logout from "./Component/logout";
import Maps from "./Maps/maps";
import Conditions from "./Conditions/conditions";
import Weather from "./Weather/weather";
import fire from "./config/Fire"


class App extends React.Component {

  state = {loggedIn: false,
  };

  constructor(props){
    super(props);
    this.state = {user:{},
    }
    
  }

  componentDidMount(){
    this.authListener();
  }
  
   authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }else{
        this.setState({user: null});
      }
    });
  }

render(){
  return (

    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Michigan Trails</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li> */}
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
                <Link className="nav-link" to={"/maps"}>Maps</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/logout"}>Logout</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="good-wrap">
          <Switch>
            <Route exact path='/'>
            {this.state.user ? (<Conditions/>) : (<Login/>)}
            </Route>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/weather" component={Weather}/>
            <Route path="/maps" component={Maps} />
            <Route path="/conditions" component={Conditions} />
            <Route path="/logout" component={Logout} />            

          </Switch>
      </div>
    </div>
    </Router>
  );
}
}

export default App;