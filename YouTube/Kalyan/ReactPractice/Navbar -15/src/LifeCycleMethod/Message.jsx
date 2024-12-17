import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        console.log("1st Method Executed")
    }
    componentDidMount(){
        console.log("3rd Method Exxcuted Component")
    }
  render() {
    console.log("2nd method Exxcuted Componet")
    return (
      <div>
        <h3>Message Component</h3>
      </div>
    )
  }
}

export default Message