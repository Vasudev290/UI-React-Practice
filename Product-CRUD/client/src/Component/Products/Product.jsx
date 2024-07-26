import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'
let Product = ()=> {
    let [product,setProducts]=useState([])
    useEffect(()=>{
        Axios.get('http://127.0.0.1:5000/api/products')
        .then((resp)=>{
            setProducts(resp.data)
        })
        .catch()
    })
  return<>
       <div className="container">
        <pre>{JSON.stringify(product)}</pre>
        <div className="row">
        {
            product.length > 0 ? <>
            {
              product.map((product)=>{
                return <div className='col-md-3'>
                 <div className="card">
                    <div className="card-header">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className='list-group'>
                            <li className='list-group-item'>{product.name}</li>
                            <li className='list-group-item'>{product.price}</li>
                            <li className='list-group-item'><button className='btn btn-success'>Add Cart</button></li>
                        </ul>
                    </div>
                 </div>
                </div>
              })
            }
            </>: <><h3>No Data</h3></>
        }
        </div>
       </div>
  </>
}

export default Product