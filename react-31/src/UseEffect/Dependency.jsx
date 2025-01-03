import React, { useEffect, useState } from 'react'

const Dependency = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`Count Updated: ${count}`)
    }, [count])

  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount( count + 1)} className='btn btn-success'>incr</button>
    </div>
  )
}

export default Dependency