import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./components/home.component";
import LoginNavigation from "./components/home.component";
import EventList from "./components/calendar/event-list.js";
import Settings from './components/settings/settings.js';
import Messages from './components/messages/messages.js';
import Schedule from './components/schedule/schedule.js';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQtN2Doz8HsKXF7o8E1sS07GrRtG1Wa44",
  authDomain: "freetime-calendar.firebaseapp.com",
  projectId: "freetime-calendar",
  storageBucket: "freetime-calendar.appspot.com",
  messagingSenderId: "386652212300",
  appId: "1:386652212300:web:c2bdf1ea8542e071b3b8e9",
  measurementId: "G-L9153QEHFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

const auth = getAuth();


function Calendar() {
  console.log("calendar");
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    return (<div className="App">

    <header>

    </header>

    <section>
      {/* Checks if the user is signed in or not and changes  */}
      <App />
    </section>
  </div>);
  } else {
    // No user is signed in.
    return (<div className="App">

    <header>

    </header>

    <section>
      {/* Checks if the user is signed in or not and changes  */}
      <SignIn />
    </section>
  </div>);
  }
}

function SignIn() {
  console.log("signin");

  const user = null;

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    user = result.user;

    window.location = "/home";
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  return (
    <button onClick={googleSignIn}>Sign In With Google</button>
  )
}

// function SignOut() {
//   return auth.currentUser && (
    
//   )
// }

function App() {
  console.log("app");
  return auth.currentUser && (<Router>
    <div className="App">
    <LoginNavigation />

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' exact component={() => <Home />} />
            {/* <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} /> */}
            <Route path="/home" exact component={() => <Home />} />
            <Route path="/calendar" component={EventList} />
            <Route path="/settings" component={Settings} />
            <Route path="/messages" component={Messages} />
            <Route path="/schedule" component={Schedule} />
          </Switch>
        </div>
      </div>
    </div>
    <button onClick={() => auth.signOut()}>Sign Out</button>
    </Router>
  );
}

export default Calendar;