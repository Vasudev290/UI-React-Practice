import React, { useEffect, useState } from 'react'
import  Axios from 'axios'
import {Navigate,useParams} from 'react-router-dom'
const UpdateProduct = () => {

  let [product,setProduct]=useState({
        name:"",
        image:"",
        price:"",
        qty:"",
        info:""
  })
 let [isUpdated,setUpdated]= useState(false)
  let p_Id= useParams('id')

  let updateInput= (event)=>{
    setProduct({...product,[event.target.name]:event.target.value})
  }
  useEffect(()=>{
    console.log(p_Id);
    let url=`http://127.0.0.1:5000/api/products/${p_Id.id}`
    Axios.get(url)
    .then((resp)=>{
      setProduct(resp.data)
    })
    .catch(()=>{})
  },[p_Id])
  let sumbitHandler= (event)=>{
    event.preventDefault()
    let url=`http://127.0.0.1:5000/api/products/${p_Id.id}`
    Axios.put(url,product)
    .then((resp)=>{
      console.log(resp.data);
      setUpdated(true)
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }
  return ( <>
    <div className="container">
      <pre>{JSON.stringify(product)}</pre>
      {
        isUpdated ? <><Navigate to="/admin"/></> : <>
        
        </>
      }
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h3>Update Product</h3>
            </div>
            <div className="card-body">
              <form onSubmit={sumbitHandler}>
                <div className='form-group'>
                  <input type="text" name='name' onChange={updateInput} value={product.name} placeholder='Product Name' className='form-control' />
                </div>
                <div className='form-group'>
                  <input name="image"  type="file" className='form-control' />
               </div>
                <div className='form-group'>
                  <input name="price" onChange={updateInput} value={product.price} placeholder='Price' type="number" className='form-control' />
                </div>
                <div className='form-group'>
                  <input  name="qty" onChange={updateInput} value={product.qty}  placeholder='QTY' type="number" className='form-control' />
               </div>
               <div className='form-group'>
               <input name="info" onChange={updateInput} value={product.info} placeholder='Additional Info' type="text" className='form-control' />
                </div>
                  <input type="submit" value="Update Product" className='btn btn-secondary'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UpdateProduct