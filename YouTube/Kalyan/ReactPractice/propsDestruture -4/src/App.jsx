import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import One from './Components/One'
import FirstComp from './PropsContainer/FirstComp'
import SecondComp from './PropsContainer/SecondComp'
import ThirdComp from './PropsContainer/ThirdComp'
import FourthComp from './PropsContainer/FourthComp'
import CompA from './propsDestructure/CompA'
const App = () => {
  return (
    <div>
      <h2>App Component</h2>
      <One />
      <FirstComp name= "Chenna Kesavulu"/>
      <SecondComp name= "Mahalakshmi "/>
      <ThirdComp name= "Vasu Dev"/>
      <FourthComp name= "Sushmitha"/>
      <CompA/>
    </div>
  )
}

export default App