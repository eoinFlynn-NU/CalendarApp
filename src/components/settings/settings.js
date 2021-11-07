import firebase from "firebase";
import React from "react";
// import Navigation from "../navbar.components";


function Settings(auth) {

  return auth.currenpmntUser && (
    <div className="settings">
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
  // return null;
}
export default Settings;

