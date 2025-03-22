import {configureStore} from '@reduxjs/toolkit';
import customerReducer from './ReduxToolKit//CustomerAddApp/Slices/CustomerSlices';
import likeReducer from './ReduxToolKit/Redex-Sub-Com-Like/Slices/likeCountSlice';
export const Store = configureStore({
    reducer: {
        customers: customerReducer,
        count: likeReducer,
    }
})