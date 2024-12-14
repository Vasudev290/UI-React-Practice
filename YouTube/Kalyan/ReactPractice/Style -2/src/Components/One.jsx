import React from 'react'
import './Style.css'


const a = "Apple"
const b = "Banana"

const One = () => {
  return (
    <div>
        <h2>Component Section - A </h2>
        <div className="container">
            <h2>{a}</h2>
            <h2>{b}</h2>
            <button className='btn btn-success'>Submit</button>
        </div>
    </div>
  )
}

export default One