import React, { useEffect, useMemo, useState } from 'react'

const ApiData = () => {
    const [users, setUsers] = useState([])
    //console.log(users)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((data) => setUsers(data))
    }, [])
    const sortUsers = useMemo(() => {
        console.log("Sorting Users")
        return [...users].sort((a, b) => a.name.localeCompare(b.name))
    }, [users])
  return (
    <div>
        <h3>API Data (Optimizing Expensive Computations)</h3>
        <ul>
            {sortUsers.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}

export default ApiData