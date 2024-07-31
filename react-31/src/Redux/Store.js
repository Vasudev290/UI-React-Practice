import { createStore, applyMiddleware } from "redux";
//import { useReducer } from "react";
import {composeWithDevTools} from '@redux-devtools/extension'
import {thunk} from 'redux-thunk'
import {logger} from 'redux-logger'
import { userReduser } from "./User/user.reducer";
let store= createStore(userReduser, composeWithDevTools(applyMiddleware(thunk, logger)))

export {store}