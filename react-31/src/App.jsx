import React from 'react'
import {Provider} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Message from './Component/Message/Message'
import store from './redux/store'
import Counter from './Component/Counter/Counter'
import Product from './Component/Product/Product'
import Form from './Assign/Form'
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
  <hr />
  <Form />
</Provider>
  </div>
}

export default App