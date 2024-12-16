import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './LifeCycleMethod/Message'
import Binding from './BindingMethod/Binding'
import Users from './Axios/Users'
const App = () => {
  return (
    <div>
      <h3>App Components</h3>
      <Message/>
      <hr />
      <Binding/>
      <hr />
     <Users/>
      
    </div>
  )
}

export default App