import React from 'react'
import CompB from './CompB'
const User = {
    name: "Vasu",
    age:23,
    sal: 45000,
    city: "Bangalore",
    mindset: "Overthinking"
}

const CompA = () => {
  return (
    <div>
        <h2>Component A</h2>
        <pre>{JSON.stringify(User)}</pre>
        <CompB User= {User}/>
    </div>
  )
}

export default CompA