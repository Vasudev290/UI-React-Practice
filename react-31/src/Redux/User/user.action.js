import Axios from 'axios'
//Action Type:
let USER_REQ= 'USER_REQ' 
let USER_SUCCESS= 'USER_SUCCESS' 
let USER_FAILURE= 'USER_FAILURE' 

//Redux action - is function return actionable object.
let userReq = ()=>{
    return {type:USER_REQ}
}
let userSuccess= (users)=>{
    return {type:USER_SUCCESS, payload:users}
}
let userFailure= ()=>{
    return {type:USER_FAILURE}
}


let userAction= ()=>{
    return async ()=>{
        userReq()
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            userSuccess(resp.data)
        })
        .catch((err)=>{
            userFailure()
        })
    }
}

export {USER_REQ,USER_SUCCESS,USER_FAILURE,userAction}
