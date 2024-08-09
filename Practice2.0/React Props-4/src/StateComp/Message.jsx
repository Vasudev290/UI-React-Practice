import React, { Component } from 'react'

class Message extends Component {
    Msg= "Hello"

    gmHandler= ()=>{
        this.Msg="Good Morning"
        //console.log(this.Msg);
        this.forceUpdate()
        
    }
    gaHandler= ()=>{
        this.Msg= "Good AfterNoon"
        this.forceUpdate()
    }
    gnhandler= ()=>{
        this.Msg= "Good Night"
        //console.log(this.Msg);
        this.forceUpdate()
        
    }
  render() {
    return (
      <div>
        <h4>Message Comp</h4>
        <h3>Wish Message:{ this.Msg}</h3>
        <button onClick={this.gmHandler} className='btn btn-success ml-2'>GM</button> 
        <button onClick={this.gaHandler} className='btn btn-primary ml-2'>GA</button> 
        <button onClick={this.gnhandler} className='btn btn-danger ml-2'>GN</button>
      </div>
    )
  }
}

export default Message