import React, {useState} from "react";
import "../messages/messages.css";

function Messages() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    let message = "";    

    function getData(val) {
        setData(val.target.value)
        setPrint(false);
        console.warn(val.target.value)
    }

    function updateText() {
        message = data;
        setPrint(true);
    }

    return(
        <div className="message-bar">
           {
               print?
               <div>
                   <label className="labelDisplay">
                       {data}
                   </label>
               </div>
               :             
               <div>
                   <label className="labelDisplay">
                        {message}
                   </label>
               </div>
           }
           <input type="text" onChange={getData}></input>
           <button onClick={() => updateText()}>Send</button>
        </div>
    )
}
export default Messages;