import React, { Component } from 'react'

export class Message extends Component {
    Msg="Hello...!"
    gmHandler=()=> {
        this.Msg=("Good Morning")
        console.log(this.Msg);
        this.forceUpdate()
        
    }
    gaHandler=()=> {
        this.Msg=("Good Afternoon Maa..!")
        this.forceUpdate()
    }
    gnHandler=()=> {
        this.Msg=("Good Night..machoo!")
        this.forceUpdate()
    }
  render() {
    return (
      <div>
        <h2>Merssage Compnent</h2>
        <h3>Wish Message:{this.Msg}</h3>
        <button onClick={this.gmHandler} className='btn btn-dark'>GM</button>
        <button onClick={this.gaHandler} className='btn btn-info ml-3'>GA</button>
        <button onClick={this.gnHandler} className='btn btn-secondary ml-3'>GN</button>
      </div>
    )
  }
}

export default Message