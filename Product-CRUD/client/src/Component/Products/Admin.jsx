import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  Axios  from 'axios'
let Admin= ()=> {

  let [product, setProducts]=useState([])

    useEffect(()=>{
      getProducts();
    },[])

let getProducts =()=>{
  Axios.get('http://127.0.0.1:5000/api/products')
      .then((resp)=>{
      setProducts(resp.data)
      })
      .catch(()=>{})
}      
let deleteProduct= (p_Id)=>{
  /*
    USAGE : Delete a Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : DELETE
    Fields : no-fields
 */
let url= `http://127.0.0.1:5000/api/products/${p_Id}`
Axios.delete(url)
.then((resp)=>{
    getProducts()
})
.catch((err)=>{})
}
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
          <Link to="/create" className='btn btn-success'>Create Products</Link>
          </div>
        </div>
        <div className="row">
          <pre>{JSON.stringify(product)}</pre>
          <div className="col">
            <table className='table'>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    product.length > 0 ? <>
                    {

                      product.map((product,index)=>{
                        return<tr key={index}>
                          <td>{index+1}</td>
                          <td>{product.name}</td>
                          <td><img src={product.image} height={"75px"} alt="" /></td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>
                            <Link to={`/updateProduct/${product._id}`} className='btn btn-success'>UPDATE</Link>
                            <button onClick={deleteProduct.bind(null,product._id)} className='btn btn-danger ml-2'>DELETE</button>
                          </td>
                        </tr>
                      })
                    }
                    </>:<><h3>No Data</h3></>
                  }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin