import React, { useState } from 'react'

const Memo = () => {
    let [counter, setCounter]= useState(1)
  return<>
<h2>Memo Example</h2>
<hr />
{/* <pre>{JSON.stringify(counter)}</pre> */}
<button onClick={()=>{setCounter(counter-1)}}>DECR</button> {counter} <button onClick={()=>{setCounter(counter +1)}}>INCR</button>

  </>
}

export default Memo