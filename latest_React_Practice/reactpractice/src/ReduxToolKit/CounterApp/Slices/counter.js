import { createSlice } from "@reduxjs/toolkit";
export const counterSlices = createSlice({
    name: 'Counter',
    initialState: {
        value : 0
    },
    reducers: {
        addIncr: (state, action) => {
            state.value += 1
        },
        minusDecr: (state, action) => {
            if(state.value > 0){
                state.value -= 1
            }
        },
        addRest: (state, action) => {
            state.value = 0
        }

    }
});
export const {addIncr, minusDecr, addRest} = counterSlices.actions;
export default counterSlices.reducer;