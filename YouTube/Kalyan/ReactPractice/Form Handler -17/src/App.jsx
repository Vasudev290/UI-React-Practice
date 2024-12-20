import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './LifeCycleMethod/Message'
import Binding from './BindingMethod/Binding'
import Users from './Axios/Users'
import Navbar from './Navbar/Navbar'
//import Form from './FormHandling/Form'
import Form from './FormHandling/Form1'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default App