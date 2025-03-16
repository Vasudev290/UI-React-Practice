import React from 'react'
import WithAuthentication from './WithAuthentication'

const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard Component</h2>
    </div>
  )
}

export default WithAuthentication(Dashboard)