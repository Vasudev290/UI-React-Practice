import React, { useContext } from 'react'
import { CompContext } from './CompA'
const CompB = () => {
    const data = useContext(CompContext)
  return (
    <div>
        <h2>Component B</h2>
        <h3>Hello, {data}!</h3>
    </div>
  )
}

export default CompB