import React from 'react'
import Auth from './Auth'
const Dash = (props) => {
  const {firstName, lastName, email} = props.userDetails
  return (
    <div>
      <h3>{firstName  +  lastName} Welcome to the Dashboard..! 🏠 {email}</h3>
    </div>
  )
}
const UserAuthenticated = Auth(Dash)
export default UserAuthenticated;