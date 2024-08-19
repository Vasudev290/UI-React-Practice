import React from 'react'
import CompD from './CompD'
const CompC = (props) => {
  return (
    <div>
        <h2>Comp C</h2>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <CompD emp_data={props.emp_data}/>
        <h2>Email Id:{props.emp_data}</h2>
        
    
    </div>
  )
}

export default CompC