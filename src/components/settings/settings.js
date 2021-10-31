import React from "react";


function Settings() {
  return(
    <div className="settings">
      <button onClick={() => {
        if(window.confirm('Are you sure you want to log out?')){
          console.log('logging out');
          window.location.pathname = '/';
          //add code that actually logs the user out, not just takes them to sign in page
        }
      }}>
       Log Out</button>
    </div>
  )
}
export default Settings;