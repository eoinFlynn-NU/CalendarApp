import React from "react";
import Navigation from "./navbar.components";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <p>
        Hello! This is our calendar website. Calendar coming
        soon... <br></br>
        In the mean time, please play a game of Tic Tac Toe!
      </p>
    </div>
  );
}

export default Home;