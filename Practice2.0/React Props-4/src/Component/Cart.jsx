
import React, { Fragment } from 'react'

const Cart = (props) => {
  return (
    <Fragment>
        <h2>Cart Componenet</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Student Id:{props.product.eid}</h2>
        <h2>Student Name:{props.product.ename}</h2>
        <h2>Student Salary:{props.product.esal}</h2>
        <h2>Student Color:{props.product.color[1]}</h2>
        <img src={props.product.image} alt=""  width="250"/>
    </Fragment>
  )
}

export default Cart