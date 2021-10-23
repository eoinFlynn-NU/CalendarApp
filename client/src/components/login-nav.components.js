import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginNavigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={"/sign-in"}>Selvel7i</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-in"}>Login</Link>
          </li>
          <div />
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }
}