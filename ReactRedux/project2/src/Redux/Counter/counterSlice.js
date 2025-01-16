import {createSlice} from '@reduxjs/toolkit' 

export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        countVle: 0
    },
    reducers: {
        increment: (state) => {
            state.countVle += 1
        },
        decrment: (state) => {
            state.countVle -=1
        },
        incermentBy5: (state, action) => {
            state.countVle += (action.payload)
        }
    }
})
export const {increment, decrment, incermentBy5} = counterSlice.actions;
export default counterSlice.reducer;