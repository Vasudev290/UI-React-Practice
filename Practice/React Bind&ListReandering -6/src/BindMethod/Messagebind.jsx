import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state={
            Message:"Hello..!"
        }
    }
    UpdateHandler= (Value)=>{
        this.setState({Message:Value})
    }
    
  render() {
    return (
      <div>
        <h1>Message Comp</h1>
        <h2>Message Value:{this.state.Message}</h2>
        <button onClick={this.UpdateHandler.bind(this,"Good Morning")}>GM</button>
        <button onClick={this.UpdateHandler.bind(this,"Good Afternoon...!")}>GA</button>
        <button onClick={this.UpdateHandler.bind(this,"Good NIght....!")}>GN</button>
      </div>
    )
  }
}

export default Message