import {configureStore} from '@reduxjs/toolkit';
import customerReducer from './ReduxToolKit//CustomerAddApp/Slices/CustomerSlices';
import likeReducer from './ReduxToolKit/Redex-Sub-Com-Like/Slices/likeCountSlice';
import subscriberSlice  from './ReduxToolKit/Redex-Sub-Com-Like/Slices/subscribeSlice';
import commentSlice  from './ReduxToolKit/Redex-Sub-Com-Like/Slices/commentSlice';
import counterSlices  from './ReduxToolKit/CounterApp/Slices/counter';
import userSlices from './ReduxToolKit/UserData/Slices/userSlices';
export const Store = configureStore({
    reducer: {
        customers: customerReducer,
        count: likeReducer,
        subscriber: subscriberSlice,
        comments: commentSlice,
        counter: counterSlices,
        users: userSlices
    }
})