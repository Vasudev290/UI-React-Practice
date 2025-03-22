import { createSlice } from "@reduxjs/toolkit";
export const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, action) => {
            state.comments.push(action.payload)
        }
    }
});
export const {addComments} = commentSlice.actions;
export default commentSlice.reducer;