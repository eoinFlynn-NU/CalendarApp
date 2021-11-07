import firebase from "firebase/app";
import React from "react";


function Settings(auth) {

  return auth.currenpmntUser && (
    <div className="settings">
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
  // return null;
}
export default Settings;

