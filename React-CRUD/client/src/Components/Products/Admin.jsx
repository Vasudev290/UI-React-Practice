import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Admin = () => {

  let [products,setProducts]=useState([])

  let getProducts= ()=>{
    Axios.get("http://127.0.0.1:5000/api/products")
    .then((resp)=>{
      setProducts(resp.data)
    })
    .catch(()=>{})
  }
  useEffect(()=>{
    getProducts()
  },[])
  let deleteProduct=(id)=>{
    let url= `http://127.0.0.1:5000/api/products/${id}`
    Axios.delete(url)
    .then(()=>{
      getProducts()
    })
    .catch(()=>{})
  }
  return (
    <div>
        <h3>Admin Component</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro, dolores quae perferendis incidunt voluptas quos sapiente distinctio numquam animi odit. Magni numquam veritatis vero repellat eius! Rem eius quasi iure? Officiis saepe error qui reiciendis in corporis, neque tempore animi vero incidunt ratione exercitationem eligendi tempora aliquam harum nemo?</p>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Link to='/createproduct' className='btn btn-primary'>Create new Product</Link>
            </div>
          </div>
          <div className="row">
            <pre>{JSON.stringify(products)}</pre>
            {
              products.length > 0 ? <>
              <div className="col-md-8">
                <table className='table'>
                  <thead className='bg-primary text-white'>
                    <tr>
                      <td>Name</td>
                      <td>Image</td>
                      <td>Price</td>
                      <td>Qty</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.map((product)=>{
                        return <tr>
                          <td>{product.name}</td>
                          <td><img src={product.image} width={'70px'} alt="" /></td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td><Link to={`/updateProduct/${product._id}`} className='btn btn-warning mr-2'>Update</Link><button className='btn btn-danger' onClick={deleteProduct.bind(null,product._id)}>Delete</button></td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
              </> : <>No Data</>
            }
          </div>
        </div>
    </div>
  )
}

export default Admin