import React from 'react'
import CompE from './CompE'

const CompD = ({value}) => {
  return (
    <div>
        <h2>Component D</h2>
        <CompE value= {value}/>
    </div>
  )
}

export default CompD