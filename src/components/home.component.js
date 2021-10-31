import React from "react";
import Navigation from "./navbar.components";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <p>
        Hello! This is our calendar website. We are working on the storage/backend, and will hopefully format the our webpage
         to look nicer soon, as well as implementing a way to chat. Feel free to explore!
      </p>
    </div>
  );
}

export default Home;