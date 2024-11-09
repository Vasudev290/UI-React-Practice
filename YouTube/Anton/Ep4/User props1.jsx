import React from 'react'

const User = (props) => {
  return (
    <div>
        <h2>User</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>{props.gender}</h2>
        <h2>{props.phone}</h2>
        <h2>{props.email}</h2>
    </div>
  )
}

export default User