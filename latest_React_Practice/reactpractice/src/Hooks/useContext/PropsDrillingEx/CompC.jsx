import React from 'react'
import CompD from './CompD'

const CompC = ({value}) => {
  return (
    <div>
        <h2>Component C</h2>
        <CompD value={value}/>

    </div>
  )
}

export default CompC