import React, { useEffect, useState } from 'react'
import ReceivedProps from './ReceivedProps'

const ApiData = () => {
    const[apiData, setApiData] = useState([])
    console.log(apiData)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setApiData(data))
    }, [])
  return (
    <div>
        <h1>API Data</h1>
        <ReceivedProps propData= {apiData}/>
    </div>
  )
}

export default ApiData