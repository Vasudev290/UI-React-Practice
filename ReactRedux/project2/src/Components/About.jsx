import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrment, incermentBy5, increment } from '../Redux/Counter/counterSlice'

const About = () => {
  const count = useSelector((state) => state.count.countVle)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter App :{count}</h1>
      <button onClick={() => dispatch(increment())}>Incr</button>
      <button onClick={() => dispatch(incermentBy5(5))}>Incr5</button>
      <button onClick={() => dispatch(decrment())}>Decr</button>
    </div>
  )
}

export default About