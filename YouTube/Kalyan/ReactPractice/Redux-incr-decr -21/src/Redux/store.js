import { createStore } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import { rootReducer } from './rootRdeucer';
const store = createStore(rootReducer, composeWithDevTools());

export { store };
