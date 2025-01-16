import { createSlice } from "@reduxjs/toolkit";
export const cartReducer = createSlice({
    name: "cartReducer",
    initialState: {
        cartValue: [],
        totalPrice: 0
    },
    reducers: {
        countCart: (state, action) => {
            state.cartValue.push(action.payload)
            const priceArray = state.cartValue.map(obj => obj.productPrice)
            state.totalPrice = priceArray.reduce((a,b) => a+b)
        },
        removeCart: (state, action) => {
            const index = state.cartValue.findIndex(obj => obj.productName === action.payload.productName)
            if(index > -1){
                state.cartValue.splice(index, 1)
            }
            const priceArray = state.cartValue.map(obj => obj.productPrice)
            state.totalPrice = priceArray.reduce((a,b) => a+b, 0)
        }
    }

})
export const {countCart, removeCart} = cartReducer.actions;
export default cartReducer.reducer;