import  Axios  from 'axios'
import React, { useEffect, useState,} from 'react'
import { useParams, Navigate } from 'react-router-dom'
let UpdateProduct= ()=> {
    let[product, setProduct]= useState({
        name:"",
        image:"",
        price:"",
        qty:"",
        info:""
    })

let [isUpdated,setUpdated]= useState(false)
let p_Id= useParams('id')

let changeInput= (event)=>{
   setProduct({...product,[event.target.name]:event.target.value})
}
useEffect(()=>{
        console.log(p_Id);
        let url =`http://127.0.0.1:5000/api/products/${p_Id.id}`
        Axios.get(url)
        .then((resp)=>{
            setProduct(resp.data) 
        })
        .catch(()=>{})
    },[])

let submitHandler= (event)=>{
    event.preventDefault();
    let url = `http://127.0.0.1:5000/api/products/${p_Id.id}`
    Axios.put(url,product)
    .then((resp)=>{
        console.log(resp.data);
        setUpdated(true)
    })
    .catch((err)=>{
        console.log(err);
    })
}


    return <>
        <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>

        {
            isUpdated ? <><Navigate to="/admin"/> </>:<>
            
            </>
        }  
        <div>
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h3>Update Product</h3>
                  </div>
                  <div className="card-body">
                  <form onSubmit={submitHandler}>
                  <div className='form-group'>
                    <input type="text"  name='name' onChange={changeInput} value={product.name} placeholder='Product Name' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <input type="file" placeholder='Image'  name='image' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <input type="number"  name='price' onChange={changeInput} value={product.price} placeholder='Price' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <input type="number"  name='qty' onChange={changeInput} value={product.qty} placeholder='Qty' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <input type="text"  name='info' onChange={changeInput} value={product.info} placeholder='Additional info' className='form-control' />
                  </div>
                  <input type="submit" className='btn btn-primary' value="Updated" />
                </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
    
    
  
}

export default UpdateProduct