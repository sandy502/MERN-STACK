import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Search from "./search"
import Signup from "./signup";
import Login from "./login";
import Songs from "./songs";
import "./searchcss.css"
import "./maincss.css";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div className= "flex-box-container">
          <h1 className="musically">MusicAly</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/MusicLibrary">Search</NavLink></li>
            <li><NavLink to="/Playlist">Your playlist</NavLink></li>
            <li><NavLink to="/Signup">SignUp</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>  
            <Route path="/MusicLibrary" component={Search}/>
            <Route path="/Playlist" component={Songs}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Login" component={Login}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;