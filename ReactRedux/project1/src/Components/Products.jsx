import React,{useEffect, useState} from 'react'
const Products = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    const fetchData = async () => {
        try{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setProducts(data)
        } catch(err){
            if (err) throw err
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
        <div className="container mt-3">
            <div className="row">
                <pre>{JSON.stringify(products)}</pre>
                {products.map((product, index) => (
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
                    <div className="card h-100 text-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="card-img-top"
                        style={{ width: "100%", height: "200px", objectFit: "contain" }}
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h6 className="card-title text-truncate" title={product.title}>
                          {product.title}
                        </h6>
                        <p className="card-text">${product.price.toFixed(2)}</p>
                        <div className="mt-auto">
                          <button className="btn btn-primary btn-sm me-2">Add</button>
                          <button className="btn btn-danger btn-sm m-2">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products