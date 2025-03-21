import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteCustomer } from './Slices/CustomerSlices'
const CustomerView = () => {
  const consumers = useSelector((state) => state.customers)
  const dispatch = useDispatch()
  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index))
  }
  return (
    <div>
      <h3>Customer Name's</h3>
      <ul style={{listStyle: 'none'}}>
        {consumers.map((cons, index) => {
          return <li key={index}>{cons}<button onClick={() => deleteHandler(index)}>Delete</button></li>
        })}
      </ul>
    </div>
  )
}

export default CustomerView