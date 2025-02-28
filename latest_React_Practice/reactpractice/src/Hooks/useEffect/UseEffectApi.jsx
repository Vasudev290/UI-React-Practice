import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])
  return (
    <div>
        <h2>Api Integration Work</h2>
        {data.map((item, index) => (
            <ul>
                <li key={index}>{item.name}</li>
            </ul>
        ))}
    </div>
  )
}

export default UseEffectApi