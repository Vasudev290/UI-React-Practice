import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reduxToolkit/CreateSlices/counterSlice.js'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})