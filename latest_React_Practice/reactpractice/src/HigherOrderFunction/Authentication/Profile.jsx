import React from 'react'
import WithAuthentication from './WithAuthentication'

const Profile = () => {
  return (
    <div>
        <h2>Profile Status</h2>
    </div>
  )
}

export default WithAuthentication(Profile)