import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>
        <h1>Comp B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <CompC emp_Data={props.emp_Data} />
    </div>
  )
}

export default CompB