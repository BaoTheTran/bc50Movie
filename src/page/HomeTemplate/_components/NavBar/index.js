import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
       <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/list-movie">List Movie</NavLink>
      </li>
    </ul>
  </div>
</nav>

    )
  }
}
