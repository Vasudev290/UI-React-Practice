import { combineReducers } from "redux";
import messageReducer from "./Wish/message.reducer";
import counterReducer from "./Counter/counter.reducer";
import producctReducer from "./Product/product.reducer";
let rootReducer= combineReducers({message:messageReducer,counter:counterReducer,product:producctReducer})

export default rootReducer