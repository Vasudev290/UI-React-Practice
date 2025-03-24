import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [
        {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
        }
        ]
};
export const userSlices = createSlice({
    name: 'User',
    initialState,
    reducers: {
        addUser: (state, action) => {
            let newUserId = state.data.length + 1;
            let newUser = {id: newUserId, ...action.payload};
            state.data.push(newUser)
        },
        //with findIndex method
        // deleteUser :(state, action) => {
        //     let indexId = state.data.findIndex((user) => user.id === action.payload)
        //     state.data.splice(indexId, 1)
        // }

        //with filter method
        deleteUser: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload)
        },
        // updateUser: (state, action) => {
        //     state.data = state.data.map(user =>
        //         user.id === action.payload.id ? { ...user, ...action.payload } : user
        //     );
        // }        
        updateUser: (state, action) => {
            let index = state.data.findIndex((user) => user.id === action.payload.id);
            state.data[index] = action.payload;
        },
        getUser: (state) => {
            state.data = [...state.data]
        }
    }
});

export const {addUser, updateUser, deleteUser, getUser} = userSlices.actions;
export default userSlices.reducer;