import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux/Slices/userSlice";
import countReducer from './Redux/Counter/counterSlice'
export const store = configureStore({
    reducer :{
        userInfo: userReducer,
        count: countReducer
    },
});