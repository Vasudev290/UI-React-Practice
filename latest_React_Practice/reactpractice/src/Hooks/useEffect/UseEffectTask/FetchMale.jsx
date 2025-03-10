import React, { useEffect, useState } from 'react'

const FetchMale = () => {
    const [maleUsers, setMaleUsers] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then((resp) => resp.json())
        .then((data) => {
            const maleData = data.users.filter((user) => user.gender === "male")
            setMaleUsers(maleData)
        })
    }, [])
  return (
    <div>
        <h2>Fetching Data Male</h2>
        {maleUsers.map((male) => {
            return <li key={male.id}>{male.firstName} {male.lastName} - {male.gender}</li>
        })}
    </div>
  )
}

export default FetchMale