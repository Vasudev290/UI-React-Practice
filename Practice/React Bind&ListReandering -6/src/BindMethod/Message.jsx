import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state={
            Message:"Hello..!"
        }
    }
    GmHandler= ()=>{
        this.setState({Message:"Good Morning"})
    }
    GaHandler= ()=>{
        this.setState({Message:"Good AfterNoon"})
    }
    GnHandler= ()=>{
        this.setState({Message:"Good Night..!"})
    }
  render() {
    return (
      <div>
        <h1>Message Comp</h1>
        <h2>Message Value:{this.state.Message}</h2>
        <button onClick={this.GmHandler}>GM</button>
        <button onClick={this.GaHandler}>GA</button>
        <button onClick={this.GnHandler}>GN</button>
      </div>
    )
  }
}

export default Message