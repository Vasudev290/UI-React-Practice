
import React from 'react'

function A() {
const parent = "This is parent Data of A component" ;

  return(
    <div>
      <h1>Component A</h1>
      <B value = {parent}/>
    </div>
  )
}
function B({value})
{
  return(
    <div>
      <h2>Component B</h2>
      <C value={value}/>
    </div>
  )
}
function C({value})
{
  return(
    <div>
      <h2>Component C</h2>
      <D value={value}/>
    </div>
  )
}
function D({value})
{
  return(
    <div>
      <h2>Component D</h2>
      <E value={value}/>
    </div>
  )
}
function E({value})
{
  return(
    <div>
      <h2>Component E</h2>
      <h1>Finnaly I Hava recevied the :   {value}</h1>
    </div>
  )
}

export default A