import {} from './message.action.js'

let initialState = {
    msg: "Hello"
}

let messageReducer = (state=initialState, action) => {
    // console.log(action)
    // console.log(action.type)
    switch (action.type) {
        case "GM":
            return {...state, msg: "Hello, Good Morning🔆😍😍"}
        case 'GN':
            return {...state, msg: "Hello, Good Night😴💤💤💤"}
            
        default:
            return state;
    }
}

export {messageReducer}