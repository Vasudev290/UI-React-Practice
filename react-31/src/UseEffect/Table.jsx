import React, { useEffect, useState } from 'react'
//import { json } from 'react-router-dom'

const Table = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        try{
            const response = await fetch("https://fakestoreapi.com/products")
            const result = await response.json();
            setData(result)
        } catch(err) {
            if (err) throw err
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    if(loading) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border text-primary" role='status'>
                    <span className='sr-only'>Loading..!</span>
                </div>
                <p>Loading Products...</p>
            </div>
        )
    }
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