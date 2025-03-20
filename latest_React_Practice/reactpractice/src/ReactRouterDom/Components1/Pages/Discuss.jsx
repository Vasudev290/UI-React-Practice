import React from 'react'
import { Outlet } from 'react-router-dom'

const Discuss = () => {
  return (
    <div>
        <h2>Discuss Component</h2>
        {/*outlet => Represent the Child Routes */}
        <Outlet/>
    </div>
  )
}

export default Discuss