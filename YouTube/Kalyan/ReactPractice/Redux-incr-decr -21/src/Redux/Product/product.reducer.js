import {INCR, DECR} from '../Product/product.action.js'

let initialState = {
    pro_name : "Marker Pen",
    price: 30,
    qty : 1
}

let productReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'INCR' :
        return {...state, qty: state.qty + 1}
       case 'DECR' :
        return {...state, qty: state.qty > 1 ? state.qty -1 : 1} 
        default:
            return state;
    }
}

export {productReducer}