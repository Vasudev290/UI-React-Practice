import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "Counter",
    initialState:{
        value: 0
    },
    reducers:{
        increament: (state, action) => {
            state.value += 1
        }
    }

})
export const {increament} = counterSlice.actions;
export default counterSlice.reducer;