import React,{useState} from 'react'

const UseStateBoolean = () => {
    const [isLogin, setIsLoged] = useState(false)
  return (
    <div>
        <h2>{isLogin ? "Welcome, Vasu" : "Please login"}</h2>
        <button onClick={() => setIsLoged(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
        </button>
    </div>
  )
}

export default UseStateBoolean