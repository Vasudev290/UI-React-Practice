import React from 'react'
import CompC from './CompC'

const CompB = ({value}) => {
  return (
    <div>
        <h2>Component -B</h2>
        <CompC value= {value }/>
    </div>
  )
}

export default CompB