import React, { useState } from 'react'

const PlusMinus1 = () => {
   let [qty, setQty]= useState(1)

   let incrHandler =()=> {
    setQty(qty +1)
   }
   let decrHandler =()=> {
    setQty(qty -1)
   }
  return (
    <React.Fragment>
        <h3>Increment & Decrment</h3>
        <h4>Quantity Value:{qty}</h4>
        <button onClick={decrHandler} className='btn btn-danger'>Decr</button>
        <button onClick={()=> {setQty(qty+1)}} className='btn btn-success ml-3'>Incr</button>
    </React.Fragment>
  )
}

export default PlusMinus1