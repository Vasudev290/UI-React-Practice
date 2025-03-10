import React, { useEffect, useState } from 'react'

const ArrayFetch = () => {
    const [users, setUser] = useState([])
    console.log(users)
    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then((resp) => resp.json())
        .then((data) => setUser(data.users))
    }, [users])
  return (
    <div>
        <h2>Fetching Array Data</h2>
        {users.map((user, index) => {
            return <li key={index}>{user.lastName} - <strong>{user.email}</strong></li>
        })}
    </div>
  )
}

export default ArrayFetch