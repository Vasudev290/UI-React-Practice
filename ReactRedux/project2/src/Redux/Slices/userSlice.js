import {createSlice} from '@reduxjs/toolkit'

export const userSlices = createSlice({
    name: 'Users',
    initialState: {
        userData: []
    },
    reducers:{
        addUsers: (state, action) => {
            state.userData = [...state.userData, action.payload];
        },
        deleteUsers: (state, action) => {
            state.userData = state.userData.filter((_, index) => index !== action.payload);
        }
    },
});
export const {addUsers, deleteUsers} = userSlices.actions;
export default userSlices.reducer;
