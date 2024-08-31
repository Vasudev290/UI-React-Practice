import {USER_REQ,USER_SUCCESS,USER_FAILURE} from './user.action'
let initialState= {
    users:[]
}

let userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'USER_REQ':
            return {'msg':'Loading'}
        case 'USER_SUCCESS':
            return {users:action.payload}
        case 'USER_FAILURE':
            return {'err':'Getting Error'}
        default:
            return state
    }
}
export default userReducer
