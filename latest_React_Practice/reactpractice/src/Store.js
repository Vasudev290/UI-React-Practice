import {configureStore} from '@reduxjs/toolkit'
import customerReducer from './ReduxToolKit//CustomerAddApp/Slices/CustomerSlices'
import counterSlice  from './ReduxToolKit/Redex-Sub-Com-Like/Slices/CounterSlices'
export const Store = configureStore({
    reducer: {
        customers: customerReducer,
        counter: counterSlice
    }
})