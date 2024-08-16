import React, { Component } from 'react'

export class Message2 extends Component {
    state={
        Msg:"Heello"
    }
    gmHandler= ()=> {
        this.setState({ Msg:"Good Morning Macha..!"})
    }
    gaHandler= ()=> {
        this.setState({Msg:"Good After NOON ..!"})
    }
    gnHandler= ()=> {
        this.setState({Msg:"Good Night...!"})
    }
    gAHandler= ()=> {
        this.setState({Msg:"Again Morninig Dar"})
    }
  render() {
    return (
      <div>
        <h2>State Component</h2>
        <h3>Wish Msg:{this.state.Msg}</h3>
        <button onClick={this.gmHandler} className='btn btn-success'>GM</button>
        <button onClick={this.gaHandler} className='btn btn-dark ml-2'>GA</button>
        <button onClick={this.gnHandler} className='btn btn-danger ml-2'>GN</button>
        <button onClick={this.gAHandler} className='btn btn-primary ml-2'>GM</button>
      </div>
    )
  }
}

export default Message2