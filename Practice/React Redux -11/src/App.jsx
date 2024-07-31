import React from 'react'
import { Provider } from 'react-redux'
import Message from './Components/Message/Message'
import Counter from './Components/Counter/Counter'
import store from './Redux/Store'
let App = () => {
  return<div>
    <Provider store={store}>
        <h1>App Component</h1>
        <hr />
        <Message />
        <hr />
        <Counter />
    </Provider>    
    </div>
  
}

export default App