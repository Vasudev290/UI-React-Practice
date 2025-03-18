import React from 'react'

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Recevied Props :", props)
    return <WrappedComponent {...props}/>
  }
}

export default withLogger