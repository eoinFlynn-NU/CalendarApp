import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import LoginNavigation from "./components/home.component";
import TicTacToeGame from "./components/tictactoe/game.js";

function App() {
  return (<Router>
    <div className="App">
    <LoginNavigation />

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" exact component={() => <Home />} />
            <Route path="/tictactoe" exact component={() => <TicTacToeGame />} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;