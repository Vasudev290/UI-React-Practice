import React, { useCallback, useEffect, useState } from 'react'

const ApiData = () => {
    const [users, setUsers] = useState([]);
    const fetchingData = useCallback( async() => {
        const response = await  fetch("https://jsonplaceholder.typicode.com/users")
        const jsonData = await response.json()
        setUsers(jsonData)
    }, [])
    useEffect(() => {
        fetchingData()
    }, [fetchingData])
  return (
    <div>
        <h2>Api Data Fetch Method...!</h2>
        <ul>
            {users.map((user, index) => {
                return <li key={index}>{user.address.city}</li>
            })}
        </ul>
    </div>
  )
}

export default ApiData