import React, { useState } from 'react'

const UseStateJson = () => {
    const [products, setProducts] = useState([
        {id:1, name: "Laptop", price: 50000},
        {id:2, name: "Phone", price: 29000},
        {id:3, name: "Tablet", price: 45000},
        {id:4, name: "Iphone", price: 69000},
    ])
  return (
    <div>
        <h2>Products List :</h2>
        {products.map((product => (
            <p key={product.id}>{product.name} - ${product.price}</p>
        )))}
    </div>
  )
}

export default UseStateJson