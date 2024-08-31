import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
const Product = () => {
  let[products,setProducts] = useState([])
  useEffect(()=>{
    Axios.get('http://127.0.0.1:5000/api/products')
    .then((resp)=>{
      setProducts(resp.data)
    })
    .catch(()=>{})
  },[])
  return (
    <div>
        <h2>Product Component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil possimus, deleniti quia alias maxime nam ullam aliquam incidunt accusantium ipsam sequi quo odit soluta autem doloribus veniam eaque nesciunt temporibus ratione eligendi quod. Commodi magnam eveniet reprehenderit non cum voluptatem? Voluptates quam cupiditate hic.</p>
        <div className="container">
          <pre>{JSON.stringify(products)}</pre>
          <div className="row">
          {
            products.length > 0 ? <>
            {
              products.map((product)=>{
                return <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                      <ul className='list-group'>
                        <li className='list-group-item'>{product.name}</li>
                        <li className='list-group-item'>{product.price}</li>
                        <li className='list-group-item'><button className='btn btn-success'>Add To Cart</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              })
            }
            </> : <>No Data</>
          }
          </div>
        </div>
    </div>
  )
}

export default Product