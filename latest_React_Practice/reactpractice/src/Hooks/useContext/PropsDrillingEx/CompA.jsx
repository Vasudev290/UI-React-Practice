import React from 'react'
import CompB from './CompB'

const CompA = () => {
    const parent = "A component Data!"
  return (
    <div>
        <h2>A- Component</h2>
        <CompB value = {parent}/>
    </div>
  )
}

export default CompA