import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './Components/Message'
import MessageBind from './Components/MessageClsBind'
import MessageFunBind from './Components/MessageFunBind'

let App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <MessageFunBind />
      
      

      
    </div>
  )
}

export default App