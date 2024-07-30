import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { incrAction, decrAction } from "../../Redux/Counter/Counter.action";
let Counter= ()=>{
    let dispatch= useDispatch()
    let counter= useSelector((state)=>{
         return state.counter
    })
    return<div>
        <h2>Counter Component</h2>
        <pre>{JSON.stringify(counter)}</pre>
        <button onClick={(counter)=>{dispatch(decrAction())}}>DECR</button>
        Counter Value :{counter.counter}
        <button onClick={(counter)=>{dispatch(incrAction())}}>INCR</button>
    </div>
}
export default Counter