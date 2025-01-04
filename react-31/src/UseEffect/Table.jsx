import React, { useEffect, useState } from 'react'
//import { json } from 'react-router-dom'

const Table = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setData(json))
    }, [])
  return (
    <div className='container mt-5'>
        <h2 className='mb-4'>Product Cards</h2>
        <div className="row">
            {data.map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card h-100">
                        <img src={item.image} alt={item.title} 
                        className='card-img-top' 
                        style={{height: '200px', objectFit:'contain'}} />
                        <div className="card-body">
                            <h5 className='card-title'>{item.title}</h5>
                            <p className="card-text text-muted">{item.descripation}</p>
                            <h6 className='text-primary'>Price: ${item.price}</h6>
                        </div>
                        <div className='card-footer bg-seconadry'>
                            <button className='btn btn-dark'>Add to Cart</button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Table