import React, { useState, useEffect, useRef } from 'react'

const ApiJson = () => {
    const dataRef = useRef([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((data) => {
            dataRef.current = data
        })
    }, [])
  return (
    <div>
        <h2>Api Data with UseRef</h2>
        <button onClick={() => setShow(!show)}>Show Data</button>
        {
            show &&(
                dataRef.current.slice(0,5).map((item, index) => (
                    <li key={index}>{item.email}</li>
                ))
            )
        }
    </div>
  )
}

export default ApiJson