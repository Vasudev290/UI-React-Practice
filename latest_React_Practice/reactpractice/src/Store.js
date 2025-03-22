import {configureStore} from '@reduxjs/toolkit';
import customerReducer from './ReduxToolKit//CustomerAddApp/Slices/CustomerSlices';
import likeReducer from './ReduxToolKit/Redex-Sub-Com-Like/Slices/likeCountSlice';
import subscriberSlice  from './ReduxToolKit/Redex-Sub-Com-Like/Slices/subscribeSlice';
export const Store = configureStore({
    reducer: {
        customers: customerReducer,
        count: likeReducer,
        subscriber: subscriberSlice,
    }
})