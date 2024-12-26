import React from 'react'
import {incrAction, dercAction} from '../Redux/Product/product.action.js'
import { useDispatch, useSelector } from 'react-redux'
const Product = () => {
    let dispatch = useDispatch();
    let product = useSelector((state) => {
        return state.product});
    let incrHandler = () => {
        dispatch(incrAction())
    }
    let dercHandler = () => {
        dispatch(dercAction())
    }
  return (
    <div>
        <h3>Product Components</h3>
        <h3>Product Name : Marker Pen</h3>
        <h4>Price: 30</h4>
        <button className='btn btn-danger m-2' onClick={dercHandler}> Decr</button> 
        <span>{product.qty}</span>
        <button className='btn btn-success m-2' onClick={incrHandler}>Incr</button>
    </div>
  )
}

export default Product