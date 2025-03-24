import React from 'react'
import { addIncr, minusDecr, addRest } from './Slices/counter'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
        <h3>Counter App</h3>
        <h3>Counter : {count}</h3>
        <button onClick={() => dispatch(addIncr())}>Incr</button>
        <button onClick={() => dispatch(minusDecr())}>Decr</button>
        <button onClick={() => dispatch(addRest())}>Reset</button>
    </div>
  )
}

export default Counter