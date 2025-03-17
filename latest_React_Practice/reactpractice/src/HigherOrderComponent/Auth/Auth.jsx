import React from 'react'

const Auth = (Component) => {
  const userDetails = {
    firstName: "Vasu",
    lastName: "Dev",
    email: "vasu@gmail.com"
  }

  const isLoggedIn = true;
  return (props) => {
    if(isLoggedIn){
      return <Component {...props} userDetails={userDetails}/>
    }else{
      return <p>Sorry you're not valid user</p>
    }
  }
}

export default Auth