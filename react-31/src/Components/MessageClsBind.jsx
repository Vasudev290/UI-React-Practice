import React, { Component } from 'react'

export class MessageBind extends Component {
  state;
  constructor(props){
    super(props)
    this.state={
      Msg:"Hello..!"
    }
  }
    /* state={
        Msg:"Hellooo..!"
    } */
    updateHandler= (Value) => {
        this.setState({Msg:Value})
    }
  render() {
    return (
      <div>
        <h2>Message Component with Bind Method</h2>
        <hr/>
        <h3>Message Value:{this.state.Msg}</h3>
        <button className='btn btn-primary ml-2' onClick={this.updateHandler.bind(this,"Good Mornig...!")}>GM</button>
        <button className='btn btn-secondary ml-2' onClick={this.updateHandler.bind(this,"Good Evening...!")}>GE</button>
        <button className='btn btn-success ml-2' onClick={this.updateHandler.bind(this,"Good Night..!")}>GN</button>
      </div>
    )
  }
}

export default MessageBind