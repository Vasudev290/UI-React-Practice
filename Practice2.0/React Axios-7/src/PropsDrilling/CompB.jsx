import React from 'react'
import CompC from './CompC'
const CompB = (props) => {
  return (
    <div>
      <h1>Comp B</h1>
      <pre>{JSON.stringify(props)}</pre>
      <CompC emp_name={props.emp.name} emp_basic={props.emp.id}/>
      
      
      
    </div>
  )
}

export default CompB