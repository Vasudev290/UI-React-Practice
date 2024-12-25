import { createStore } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import {messageReducer} from './Msg/message.reducer.js'

const store = createStore(messageReducer, composeWithDevTools());

export { store };
