import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [users, setUsers] = useState("")
    const fetchData = () => {
        fetch("https://dummyjson.com/users")
        .then((resp) => resp.json())
        .then((data) => {
         const randomUser = data.users[Math.floor(Math.random() * data.users.length)]
            setUsers(randomUser.lastName)
        })
        .catch((err) => console.error("Error fetching data :", err))
    }
    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
  return (
    <div>
        <h2>Fetch Random Names</h2>
        <h3>Random Genarated Names : {users}</h3>
    </div>
  )
}

export default FetchData