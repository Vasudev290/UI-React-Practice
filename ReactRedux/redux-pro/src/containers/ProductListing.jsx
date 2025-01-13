import React,{useEffect} from 'react'
import Axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productAction.js'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await Axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log('err', err)
        });
        dispatch(setProducts(response.data))
    };

    useEffect(() => {
        fetchProducts()
    }, []);

    console.log("Products:", products)
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing