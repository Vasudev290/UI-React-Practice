import {PLUS,MINUS} from './product.action'
let initialState = {
    qty :0
}
let producctReducer= (state=initialState, action)=>{
      switch(action.type){
        case 'PLUS':
            return {qty:state.qty +1}
        case 'MINUS':
            return {qty:state.qty -1}
        default:
            return state
      }
}
export default producctReducer