import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Product from './Component/Product'
import Message from './StateComp/Message'
import Mesaage1 from './StateComp/Mesaage1'
import Plusminus from './StateComp/Plusminus'
import MessageUse from './UseState/MessageUse'
import PlusMinus1 from './UseState/PlusMinus1'


let App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <PlusMinus1 />
      <hr />

      
    </div>
  )
}

export default App