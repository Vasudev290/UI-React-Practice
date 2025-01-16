import {createSlice} from '@reduxjs/toolkit'

export const userSlices = createSlice({
    name: 'Users',
    initialState: {
        usesrData: []
    },
    reducers:{
        addUsers: (state, action) => {
            state.usesrData = [...state.usesrData, action.payload];
        },
        deleteUsers: (state, action) => {
            state.usesrData = state.usesrData.filter((user, index) => index !== action.payload)
        }
    },
});
export const {addUsers, deleteUsers} = userSlices.actions;
export default userSlices.reducer;
