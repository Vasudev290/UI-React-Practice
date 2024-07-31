import { combineReducers } from "redux";
import messageReduser from "./Message/Message.reducer";
import counterReducer from "./Counter/Counter.reduser";
let rootReducer= combineReducers({message:messageReduser, counter:counterReducer})

export default rootReducer