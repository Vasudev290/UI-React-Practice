import React, {createContext} from 'react'
import User from './User'

export const DataCntext = createContext()

const Data = () => {
const details = {id: 101, name:"Kiran", email:"kiran@gmail.com", salary:450000}
  return (
    <div>
        <h1>Data of Origin Company</h1>
        <DataCntext.Provider value={details}>
            <User/>
        </DataCntext.Provider>
    </div>
  )
}

export default Data