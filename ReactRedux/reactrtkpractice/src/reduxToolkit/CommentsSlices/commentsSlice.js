import { createSlice} from '@reduxjs/toolkit'
export const commectSlice = createSlice({
    name: 'newComments',
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, action) => {
            state.comments.push(action.payload)
        }
    }
});
export const {addComments} = commectSlice.actions;
export default commectSlice.reducer;