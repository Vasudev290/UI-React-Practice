import React, { useState } from 'react'
import Axios from 'axios'
import {Navigate} from 'react-router-dom'
const CreateProduct = () => {
    
    let[isCreated,setCreated]=useState(false)

    let [product,setProduct]=useState({
        name:"",
        image:"",
        price:"",
        qty:"",
        info:""
    })
    let updateHandler= (event)=>{
        setProduct({...product,[event.target.name]:event.target.value})
    }
    let imageHandler=(event)=>{
       let reader= new FileReader();
       let imageFile= event.target.files[0]
       reader.readAsDataURL(imageFile);
       reader.addEventListener('load',()=>{
        setProduct({...product,image:reader.result})
       })
    }
    let sumbitHandler= (event)=>{
        event.preventDefault()
        let url=('http://127.0.0.1:5000/api/products/')
        Axios.post(url,product)
        .then((resp)=>{
          setCreated(true)
        })
        .catch(()=>{})
    }
  return (
    <div>
        <div className="container mt-4">
            <pre>{JSON.stringify(product)}</pre>
            <pre>Value:{isCreated}</pre>
            <div className="row">
                {
                    isCreated ? <><Navigate to='/product' /></> : <>
                    <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h3>Create Product</h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={sumbitHandler}>
                        <div className='form-group'>
                            <input type="text" name='name' placeholder='Product Name'className='form-control' onChange={updateHandler}/>
                        </div>
                        <div className='form-group'>
                            <input type="file" name='image' placeholder='ProductName'className='form-control' onInput={imageHandler}/>
                        </div>
                        <div className='form-group'>
                            <input type="number" name='price' placeholder='Price'className='form-control'onChange={updateHandler}/>
                        </div>
                        <div className='form-group'>
                            <input type="number" name='qty' placeholder='Qty'className='form-control' onChange={updateHandler}/>
                        </div>
                        <div className='form-group'>
                            <input type="text" name='info' placeholder='Additional Info'className='form-control' onChange={updateHandler}/>
                        </div>
                        <input type="submit" value="Create Prduct" className='btn btn-success'  />
                    </form>
                        </div>
                    </div>
                </div>
            </>
            }
            </div>
        </div>
    </div>
  )
}

export default CreateProduct