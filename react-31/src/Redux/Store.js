import {createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
//import messageReduser from './Message/Message.reducer'
import rootReducer from './Rootreduser'
let store= createStore(rootReducer, composeWithDevTools())

export default store