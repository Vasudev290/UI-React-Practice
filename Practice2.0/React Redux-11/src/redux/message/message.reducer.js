import {GM,GA,GE} from './message.action'
let initialstate= {
    msg:"Hello"
}
let messageReducer = (state=initialstate,action)=>{
           switch(action.type){
            case 'GM':
                return {msg: "Good Morning Dear..!☀️"}
            case 'GA':
                return {msg: "Good Afternoon Sir Had Lunch 🍱 or Not"}
            case 'GE':
                return {msg: "Good Evening sir..! Let's go for Chai!☕"}   
            case 'GN':
                return {msg: "Good Night.. Sweet Heart..!😴😴🛌🏽"}   
            default:
                return state
           }
}

export default messageReducer