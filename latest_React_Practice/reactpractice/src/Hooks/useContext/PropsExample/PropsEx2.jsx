import React from 'react'

const PropsEx2 = ({props}) => {
  return (
    <div>
        <h4>Child Example </h4>
        <section>
            <h2>Products Details</h2>
            <h5>id: {props.id}</h5>
            <h5>Nmae: {props.name}</h5>
            <h5>Price: {props.price}</h5>
            <h5>Description: {props.desc}</h5>
        </section>
    </div>
  )
}

export default PropsEx2