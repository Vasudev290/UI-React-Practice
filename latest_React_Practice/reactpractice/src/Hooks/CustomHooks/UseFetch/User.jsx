import React from 'react'
import useFetch from './useFetch'

const User = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")
    if(loading){
        return <p>Loading..!</p>
    };
    if(error){
        return <p>Error Fetching data..!</p>
    }
  return (
    <div>
        <h3>User Details</h3>
       <ul>
       {data.map((user, index) => (
            <li key={index}>{user.email}</li>
        ))}
       </ul>
    </div>
  )
}

export default User