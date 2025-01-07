import React, { useContext } from 'react'
import {AuthContext} from './Auth'
const Process = () => {
    const {isAuthenticated, login, logout} =useContext(AuthContext)
  return (
    <div>
        <h3>User Authentication</h3>
        {isAuthenticated ? (
            <div>
                <p>Your are logged in !</p>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <div>
                <p>Please Login ..!</p>
                <button onClick={login}>Login</button>
            </div>
        )}
    </div>
  )
}

export default Process