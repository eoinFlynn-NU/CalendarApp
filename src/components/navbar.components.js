import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={"/home"}>Selvel7i</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/calendar"}>Calendar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/home"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/settings"}>Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/messages"}>Messages</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/schedule"}>Schedule</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }

// function Navbar() {
//   const navStyle = {color: 'black'};

//   return(
//     <nav>
//       <h3>
//         <ul className={'nav-links'}>
//           <Link style={navStyle} to='/home'>
//             <li>Home </li>
//           </Link>
//           <Link style={navStyle} to='/calendar'>
//             <li>Calendar </li>
//           </Link>
//           <Link style={navStyle} to='/tictactoe'>
//             <li>Tic-Tac-Toe </li>
//           </Link>
//         </ul>
//       </h3>
//     </nav>
//   )
// }
export default Navigation;