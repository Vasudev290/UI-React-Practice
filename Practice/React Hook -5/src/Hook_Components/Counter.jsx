import React,{useState} from "react";

let Counter = ()=>{
    let [counter,setCounter]=React.useState(1)

    let IncrHandler= ()=>{
        setCounter(counter+1)
    }
   /*  let DecrHandler= ()=>{
        setCounter(counter-1)
    } */
    return<div>
        <h2>Counter- Compnoents Funtion</h2>
        <h3>Counter Value:{counter}</h3>
        <button onClick={()=>{setCounter(counter-1)}}>Decr</button>
        <button onClick={IncrHandler}>Incr</button>
    </div>
}
export default Counter