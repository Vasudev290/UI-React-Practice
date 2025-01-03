import React, { useEffect, useState } from 'react'
//import { json } from 'react-router-dom'

const FetchData = () => {
    const [data, setData] = useState([])
    console.log("1st",data)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((json) => setData(json))
        console.log("3rd Render")
    }, [])  // Runs only once when the component mounts
  return (
    
    <div>
        
        <h2>Data</h2>
        <ul>
            {
                data.map((dat) => {
                    return <li key={dat.id}>{dat.name}</li>
                })
            }
        </ul>
    
    </div>
  )
}

export default FetchData