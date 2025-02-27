import React, { useState } from 'react'

const UseStateBoolean = () => {
  const [isLoged, setIsLogged] = useState(false)
  return (
    <div>
      <h2>{isLoged ? "Welcome, Vasu!" : "Please Login"}</h2>
      <button onClick={() => setIsLogged(!isLoged)}>{isLoged ? "Logout" : "Login"}</button>
    </div>
  )
}

export default UseStateBoolean