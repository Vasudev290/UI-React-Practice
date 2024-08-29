import React from 'react'
import { incrAction,decrAction } from '../../redux/Counter/counter.action'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    let dispatch= useDispatch()
    let counter= useSelector((state)=>{
        return state.counter
    })
  return (
    <div>
        <h2>Counter Component</h2>
        <pre>{JSON.stringify(counter)}</pre>
        <button onClick={()=>{
            dispatch(decrAction())
        }} className='btn btn-danger ml-2'>DECR</button>
         Counter value: {counter.counter}
        <button onClick={()=>{
            dispatch(incrAction())
        }} className='btn btn-success ml-2'>INCR</button>
    </div>
  )
}

export default Counter