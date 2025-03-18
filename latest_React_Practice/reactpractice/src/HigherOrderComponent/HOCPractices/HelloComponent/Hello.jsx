import React from 'react'
import withLogger from './withLogger'
const Hello = ({name}) => {
    // const {name} = props
  return (
    <div>
        <h3>Hello {name} ! Welcome to Bengalure..!</h3>
    </div>
  )
}
const HellowithLogger = withLogger(Hello)
export default HellowithLogger