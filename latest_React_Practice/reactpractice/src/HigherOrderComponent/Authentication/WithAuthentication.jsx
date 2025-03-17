import React from 'react'

const isAuthenticated = false;
const WithAuthentication = (Component) => {
  return function(){
    if(!isAuthenticated){
        return <h2>User not Valid 🙄🙄❌</h2>
    }
    return <Component/>
  }
}

export default WithAuthentication