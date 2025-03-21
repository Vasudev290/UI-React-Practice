import {configureStore} from '@reduxjs/toolkit'
import customerReducer from './ReduxToolKit//CustomerAddApp/Slices/CustomerSlices'
export const Store = configureStore({
    reducer: {
        customers: customerReducer
    }
})