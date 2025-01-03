import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const decrHandler = () => {
        if (count > 0){
            setCount( count - 1)
        }
    }
  return (
    <div>
        <h2>Count :{count}</h2>
        <button onClick={() => setCount(count + 1)} className='btn btn-success m-2'>Incr</button>
        <button onClick={() => setCount(0)} className='btn btn-danger m-1'>Reset</button>
        <button onClick={decrHandler} className='btn btn-info m-2'>Decr</button>
    </div>
  )
}

export default Count