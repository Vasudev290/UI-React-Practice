import React, { createContext } from 'react'
import Profile from './Profile'
export const DetailsContext = createContext()
const Details = () => {
    const user = {name: "Arjun", role: "MERN Stack Developer", salary: 50000}
  return (
    <div>
        <h2>User Details</h2>
        <DetailsContext.Provider value={user}>
            <Profile/>
        </DetailsContext.Provider>
    </div>
  )
}

export default Details