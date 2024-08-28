
import {GM,GN} from './Message.action'
let initialstate={
    msg:"Hello"
}
let messageReducer= (state=initialstate, action)=>{
    //based on action type we are updating/create new store.
    switch(action.type){
        case 'GM':
            return {msg: "Good Morning...!"}
        case 'GN':
            return {msg: "Good Night"}
        default:
            return state;
    }
}

export default messageReducer