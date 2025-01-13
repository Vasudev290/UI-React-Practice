import {combineReducers} from 'redux'
import {productReducer, selectedProductReducers} from '../reducers/productReducer.js'

const reducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducers,
});

export default reducer