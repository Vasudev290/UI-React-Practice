import React from 'react'

const CompB = (props) => {
    const {name, age, sal, city, mindset} = props.User
  return (
    <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        {/* <h3>User Name: {props.User.name}</h3>
        <h3>User Age: {props.User.age}</h3>
        <h3>User Salary: {props.User.sal}</h3>
        <h3>User City: {props.User.city}</h3>
        <h3>User Mindset: {props.User.mindset}</h3> */}
        <h3>User Name: {name}</h3>
        <h3>User Age: {age}</h3>
        <h3>User Salary: {sal}</h3>
        <h3>User City: {city}</h3>
        <h3>User MindSet: {mindset}</h3>


    </div>
  )
}

export default CompB