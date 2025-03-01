import React, { useContext } from 'react'
import { userContext } from './Parent'
const Child = () => {
    const userName = useContext(userContext)
  return (
    <div>
        <h2>Child Component</h2>
        <h3>Recevied Data from Parent Component Name : {userName}</h3>
    </div>
  )
}

export default Child