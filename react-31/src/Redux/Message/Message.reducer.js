import { GM, GE, GN } from "./Message.action"
let initialState= {
    msg:"Hello...!"
}
let messageReduser= (state=initialState, action)=>{
      switch(action.type){
        case 'GM':
            return {msg: "Good Morning Dear..!"}
        case 'GA':
            return {msg: "Good Afternoon sir, Had lunch or Not...;)"}    
        case 'GE':
            return {msg: "Good Evening ..;)"}
        case 'GN':
            return {msg: "Good Night Sweet Dreams...!"}
        default:
            return state        
            
      }
}
export default messageReduser