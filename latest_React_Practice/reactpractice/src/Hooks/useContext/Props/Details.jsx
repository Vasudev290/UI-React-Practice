import React from 'react'

const Details = ({props}) => {
  return (
    <div>
        <h5>Details</h5>
        <h5>Name :{props.name}</h5>
        <h5>age :{props.age}</h5>
        <h5>email :{props.email}</h5>
        <h5>location :{props.loc}</h5>
        <h5>Country :{props.country}</h5>
    </div>
  )
}

export default Details