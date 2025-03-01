import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
const Login = () => {
    const {data, setData} = useContext(AuthContext)

    const loginHandler = () => {
        setData({name: "Vasu", age: 23, loc: "Bangalore"})
    }
    const logoutHandler = () => {
        setData(null)
    }
  return (
    <div>
        {data ? (
            <>
            <h2>Welcome, {data.name}</h2>
            <button onClick={logoutHandler}>Log out</button>
            </>
        ) : (
            <button onClick={loginHandler}>Login</button>
        )}
    </div>
  )
}

export default Login