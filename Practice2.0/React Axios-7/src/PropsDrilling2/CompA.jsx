import React from 'react'
import CompB from './CompB'

const CompA = () => {
    let id="101",
        name="Arjun",
        email="vasu@gmail.com",
        location=["Chennai", "Bangalore", "Nellor"]
  return (
    <div>
        <h1>Comp A</h1>
        <hr />
        <CompB props={1} emp_Data={id} emp_Data1={name} emp_Data2={email} emp_Data3={location[1]}/>
    </div>
  )
}

export default CompA