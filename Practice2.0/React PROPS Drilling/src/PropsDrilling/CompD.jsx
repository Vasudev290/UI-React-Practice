import React from 'react'

const CompD = (props) => {
  return (
    <div>
        <h2>Comp D</h2>
        <pre>{JSON.stringify(props)}</pre>
       <h3>Name:{props.emp_data}</h3>
    </div>
  )
}

export default CompD