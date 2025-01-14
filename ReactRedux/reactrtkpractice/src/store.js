import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reduxToolkit/CreateSlices/counterSlice.js'
import userReducer from './reduxToolkit/UserSlices/userSlice.js'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        newSubscriber: userReducer,
    },
})