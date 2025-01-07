import React, { useContext } from 'react'
import {IncreContext} from './Count'
const Incre = () => {
    const {count, setCount} = useContext(IncreContext)
  return (
    <div>
        <h2>Count value :{count} </h2>
        <button onClick={() => setCount(count + 1)} className='btn btn-success m-2'>Incr</button>
        <button onClick={() => setCount(0)} className='btn btn-info m-2'>Rest</button>
        <button onClick={() => setCount(count > 0 ? count -1 : 0)} className='btn btn-danger m-2'>Decr</button>
    </div>
  )
}

export default Incre