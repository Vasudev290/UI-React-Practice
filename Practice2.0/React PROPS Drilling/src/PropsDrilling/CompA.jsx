import React, { Component } from 'react'
import CompB from "./CompB"
class CompA extends Component {
  emp={
    id:101,
    name:"Vasu",
    email:"vasu@gmail.com",
    esal:4500,
    location:"Bangalore"
  }
  render() {
    return (
      <div>
        <h1>Comp A</h1>
        <CompB emp={this.emp}/>
      </div>
    )
  }
}

export default CompA