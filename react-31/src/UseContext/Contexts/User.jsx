import React,{useContext} from 'react'
import {DataCntext} from './Data'

const User = () => {
    const data = useContext(DataCntext)
  return (
    <div>
        <h2>User Details</h2>
        <p>ID: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Salary: {data.salary}</p>
    </div>
  )
}

export default User