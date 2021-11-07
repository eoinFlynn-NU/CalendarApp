import React, {useState} from "react";
import "../messages/messages.css";
import firebase from 'firebase';
import 'firebase/firestore';

import {useCollectionData } from 'react-firebase-hooks/firestore';

function Messages() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    const firestore = firebase.firestore();
    

    function getData(val) {
        setData(val.target.val)
        setPrint(false);
        console.warn(val.target.val)
    }

    return(
        <div className="message-bar">
           {
               print?
               <div>
                   <label>
                       {data}
                   </label>
               </div>
               :null
           }

           <input type="text" onChange={getData}></input>
           <button onClick={() => setPrint(true)}>Send</button>
        </div>
    )
}
export default Messages;