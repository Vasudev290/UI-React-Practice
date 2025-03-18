import React from 'react'

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true;
    return isAuthenticated ? <WrappedComponent {...props}/> : <h4>Access Denied..!🚫</h4>
  }
}

export default WithAuth