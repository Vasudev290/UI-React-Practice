import React, { useEffect, useState } from 'react'

const UseStateFetch = () => {
    const [data, setData] =useState([])
    //For Api integration use componentDidMount()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setData(data.slice(0, 5)));
    }, []);

  return (
    <div>
        <h2>Api Integration :</h2>
        {data.map((item, index) => (
            <li key={index}>{item.title}</li>
        ))}
    </div>
  )
}

export default UseStateFetch