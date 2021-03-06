import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import LoginNavigation from "./components/home.component";
import EventList from "./components/calendar/event-list.js";
import Settings from './components/settings/settings.js';
import Messages from './components/messages/messages.js';
import Schedule from './components/schedule/schedule.js';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCQtN2Doz8HsKXF7o8E1sS07GrRtG1Wa44",
  authDomain: "freetime-calendar.firebaseapp.com",
  projectId: "freetime-calendar",
  storageBucket: "freetime-calendar.appspot.com",
  messagingSenderId: "386652212300",
  appId: "1:386652212300:web:c2bdf1ea8542e071b3b8e9",
  measurementId: "G-L9153QEHFW"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function Calendar() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">

      <header>

      </header>

      <section>
        {/* Checks if the user is signed in or not and changes  */}
        {user ? <App /> : <SignIn />}
      </section>
    </div>
  )
}

function SignIn() {
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
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
    </Router>
  );
}

export default Calendar;