import React from 'react'
import WithAuth from './WithAuth'

const Dashboard = ({name}) => {
  return (
    <div>
        <h2>Welcome to {name}'s Dashboard Wall..!</h2>
    </div>
  )
}
const IsAuthed = WithAuth(Dashboard)
export default IsAuthed