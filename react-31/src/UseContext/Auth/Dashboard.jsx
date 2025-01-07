import React, { useContext } from 'react'
import{AuthContext, ThemeContext} from './Authi'
const Dashboard = () => {
    const auth = useContext(AuthContext)
    const theme = useContext(ThemeContext)
  return (
    <div>
        <h2>Dashboard Process</h2>
        <p>Authentication : {auth.isAuthenticated ? "Yes" : "No"}</p>
        <p>Theme : {theme}</p>
    </div>
  )
}

export default Dashboard