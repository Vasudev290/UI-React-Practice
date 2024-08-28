import {INCR,DECR} from './counter.action'

let initialstate= {
    counter: 0
}
let counterReducer= (state=initialstate,action)=>{
    switch(action.type){
        case 'INCR':
            return {counter:state.counter +1}
        case 'DECR':
            return {counter:state.counter -1}
        default:
            return state
    }
}

export default counterReducer