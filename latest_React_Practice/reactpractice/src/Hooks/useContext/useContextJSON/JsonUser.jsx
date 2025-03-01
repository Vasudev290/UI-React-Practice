import React, { createContext, useEffect, useState } from 'react'
import JsonRecevied from './JsonRecevied'
export const fetchContext = createContext()
const JsonUser = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((jsonValue) => setUser(jsonValue))
    }, [])
  return (
    <div>
        <h1>Fetching Data</h1>
        <fetchContext.Provider value={user}>
            <JsonRecevied/>
        </fetchContext.Provider>
    </div>
  )
}

export default JsonUser