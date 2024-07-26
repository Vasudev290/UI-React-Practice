import React,{useState} from "react"
let Message= ()=>{
   let [msg,setMsg]=useState("Hello...!");
  
   let GmHandler =()=>{
    setMsg("Good Morning Dear...!")
   }
   let GnHandler =()=>{
    setMsg("Good Night SweetHeart..!")
   }

    return<div>
        <h2>Message -Functional Component</h2>
        <h3>Message Value:{msg}</h3>
        <button onClick={GmHandler}>GM</button>
        <button onClick={GnHandler}>GN</button>
    </div>
}
export default Message