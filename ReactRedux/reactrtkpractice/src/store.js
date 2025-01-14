import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reduxToolkit/CreateSlices/counterSlice.js'
import userReducer from './reduxToolkit/UserSlices/userSlice.js'
import commectReducer from './reduxToolkit/CommentsSlices/commentsSlice.js'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        newSubscriber: userReducer,
        newComments: commectReducer
    },
})