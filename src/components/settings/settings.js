import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


function Settings() {
  const auth = firebase.auth();

  return(
    <div className="settings">
      <button onClick={() => {
        if(window.confirm('Are you sure you want to log out?')){
          auth.signOut();
          console.log('logging out');
          window.location.pathname = '/';
          //add code that actually logs the user out, not just takes them to sign in page
        }
      }}>
       Sign Out</button>
    </div>
  )
}
export default Settings;