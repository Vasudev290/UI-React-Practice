import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import Axios from 'axios'

let CreateProduct = ()=> {
  let [product,setProduct]= useState({name:"", image:"", price:"", qty:"", info:""})
  let [isCreated, setCreated] = useState(false)

  let changeHandler= (event)=>{
     setProduct({...product,[event.target.name]:event.target.value})
  }
  let changeImage= async(event)=>{
    let imageFile = event.target.files[0];
    let reader = new FileReader()
    reader.readAsDataURL(imageFile);
    reader.addEventListener('load', ()=>{
      if(reader.result){
        setProduct({...product,image:reader.result})
      }
    })
  }
  let submitHandler = (event)=>{
    event.preventDefault()
    let url = 'http://127.0.0.1:5000/api/products/'
    Axios.post(url, product)
    .then((resp)=>{
        console.log(resp);
        setCreated(true)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        {
          isCreated ? <><Navigate to="/admin"/></>:<>
          <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <h3> New Product</h3>
              </div>
              <div className="card-body">
              <form onSubmit={submitHandler}>
              <div className='form-group'>
                <input type="text" onChange={changeHandler} name='name' placeholder='Product Name' className='form-control' />
              </div>
              <div className='form-group'>
                <input type="file" onChange={changeImage} placeholder='Image' name='image' className='form-control' />
              </div>
              <div className='form-group'>
                <input type="number" onChange={changeHandler} name='price' placeholder='Price' className='form-control' />
              </div>
              <div className='form-group'>
                <input type="number" onChange={changeHandler} name='qty' placeholder='Qty' className='form-control' />
              </div>
              <div className='form-group'>
                <input type="text" onChange={changeHandler} name='info' placeholder='Additional info' className='form-control' />
              </div>
              <input type="submit" className='btn btn-secondary' value="Create Product" />
            </form>
              </div>
            </div>
          </div>
        </div>
      </>
    }
        
  </div>
</div>
)
}

export default CreateProduct