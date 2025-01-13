import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return(
        <div className="card-container" key={id}>
            <Link to={`/product/${id}`}>
            <div className="ui card">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">${price}</div>
                        <div className="meta">{category}</div>
                    </div>
            </div>
            </Link>
        </div>
        )
    })
  return <div className='product-grid'>{renderList}</div>
}

export default ProductComponent