import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Reducers/cartReducer'
export const store = configureStore({
    reducer:{
        cartInfo: cartReducer,
    }
})