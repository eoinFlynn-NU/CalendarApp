import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={"/home"}>Selvel7i</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/home"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/tictactoe"}>TicTacToe</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }
}