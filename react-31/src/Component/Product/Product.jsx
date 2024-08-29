import React from 'react'
import {plusAction,minusAction} from '../../redux/Product/product.action'
import {useDispatch, useSelector} from 'react-redux'
const Product = () => {
    let dispatch= useDispatch()
    let product= useSelector((state)=>{
        return state.product
    });
    
    let incrHandle= ()=>{
        dispatch(plusAction())
    }
    let decrHandle= ()=>{
        dispatch(minusAction())
    }
  return (
    <div>
        <h2>Product Component</h2>
        <pre>{JSON.stringify(product)}</pre>
        <button onClick={decrHandle} className='btn btn-danger'>-</button> Qty: {product.qty}
        <button onClick={incrHandle} className='btn btn-success'>+</button>
    </div>
  )
}

export default Product