import React from 'react'

const FourthComp = (props) => {
  return (
    <div>
        <h2>Component D</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h6>Component four : {props.name}</h6>
    </div>
  )
}

export default FourthComp