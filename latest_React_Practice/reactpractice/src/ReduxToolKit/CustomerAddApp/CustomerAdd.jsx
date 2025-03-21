import React, { useState } from 'react'
// import CustomerView from './CustomerView'
import { addCustomer as addCustomerAction } from './Slices/CustomerSlices'
import { useDispatch } from 'react-redux'
const CustomerAdd = () => {
  const[input, setInput] = useState("")
  const dispatch = useDispatch()
  // const[consumer, setCounsumer] = useState([])
  const addCustomer = () => {
    if(input){
      dispatch(addCustomerAction(input))
      // setCounsumer((prevSt) => [...prevSt, input])
      // console.log(consumer)
      setInput("")
    }
  }
  return (
    <>
    <div>
      <h2>Add New Customer</h2>
      <input type="text" placeholder='Type Here..!' value={input} onChange={(e) => setInput(e.target.value)}/> 
      <button onClick={addCustomer}>Add</button>
    </div>
    {/* <CustomerView/>  */}
    </>
    
  )
}

export default CustomerAdd