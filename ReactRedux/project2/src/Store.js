import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux/Slices/userSlice";
export const store = configureStore({
    reducer :{
        userInfo: userReducer,
    },
});