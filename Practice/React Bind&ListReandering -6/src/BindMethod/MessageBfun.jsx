import React,{useState} from "react";
let Message= ()=>{

    let [message,setMessage]=useState("Hello...!")

    let UpdateHandler= (Value)=>{
        setMessage(Value)
    }
    return<div>
        <h2>Message Component</h2>
        <h3>Message Value:{message}</h3>
        <button onClick={UpdateHandler.bind(null, "Good Morning")}>GM</button>
        <button onClick={UpdateHandler.bind(null, "Good Afternoon")}>GA</button>
        <button onClick={()=>{setMessage("Good Evening...!")}}>GE</button>    
        <button onClick={UpdateHandler.bind(null, "Good Night..!")}>GN</button>
    </div>
}
export default Message