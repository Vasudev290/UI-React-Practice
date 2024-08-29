import React from 'react'
import {Provider} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './Component/Message/Message'
import store from './redux/store'
import Counter from './Component/Counter/Counter'
import Product from './Component/Product/Product'
let App = () => {
  return <div>
<Provider store={store}>
    <h1>App Component</h1>
    <hr />
    <Message />
    <hr />
  <Counter/>
  <hr />
  <Product />
</Provider>
  </div>
}

export default App