import Axios from 'axios'
import Users from '../../Components/MainFiles/Users'
//Action Types
let USER_REQ = 'USER_REQ'
let USER_SUCCESS= 'USER_SUCCESS'
let USER_FAILURE= 'USER_FAILURE'


let userReq= ()=>{
    return { type:USER_REQ}
}
let userSuccess= (users)=>{
    return { type:USER_SUCCESS, payload:users}
}
let userFailure= ()=>{
    return { type:USER_FAILURE}
}

//Redux action is a funtion return actionable object
let userAction= ()=>{
    return async (dispatch)=>{
       dispatch(userReq())
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
           dispatch(userSuccess(resp.data));
        })
        .catch((err)=>{
            dispatch(userFailure())
        })
    }
}

export {USER_REQ, USER_SUCCESS, USER_FAILURE, userAction}