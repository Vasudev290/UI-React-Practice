import React from 'react'
import {Provider} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './Component/Message'
import store from './redux/store'

let App = () => {
  return <div>
  <Provider store={store}>
     <h1>App Component</h1>
     <hr />
     <Message />
  </Provider>

  </div>
}

export default App