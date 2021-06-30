import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Search from "./search"
import Signup from "./signup";
import Login from "./login";
import "./maincss.css";
 
class Header extends Component {
  render() {
    return (
        <HashRouter>
        <div className= "flex-box-container">
          <h1 className="testing">TESTING</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/MusicLibrary">Search</NavLink></li>
            <li><NavLink to="/Signup">SignUp</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>  
            <Route path="/data" component={Search}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Login" component={Login}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Header;