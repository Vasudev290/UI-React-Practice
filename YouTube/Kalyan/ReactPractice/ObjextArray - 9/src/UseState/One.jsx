import React,{useEffect, useState} from 'react'

const One = () => {
    const [city, setCity] = useState("Chennai")
    useEffect(() => {
        if(city === "Mumbai") {
            setCity("Banglore")
        }else{
            setCity("Goa")
        }
    }, [])
  return (
    <div>
        <h2>Vasu</h2>
        <h4>I'm Living in {city}</h4>
    </div>
  )
}

export default One