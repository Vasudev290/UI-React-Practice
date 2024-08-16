import React, { Component } from 'react'

class Message extends Component {
    state={
        Msg:"Hello..!"
    }
    gmHandler= () => {
        this.setState({Msg:"Good MORNING Machaa..!"})
    }
    gaHandler= () => {
        this.setState({Msg:"Good After Dear"})
    }
    geHandler= () => {
        this.setState({Msg:"Good evening"})
    }
    gnHandler= () => {
        this.setState({Msg:"Good Night...!"})
    }
  render() {
    return (
      <div>
        <h2>Message Components</h2>
        <hr/>
        <h3>Message Value: {this.state.Msg}</h3>
        <button className='btn btn-primary ml-2' onClick={this.gmHandler}>GM</button>
        <button className='btn btn-success ml-2' onClick={this.gaHandler}>GA</button>
        <button className='btn btn-danger ml-2' onClick={this.geHandler}>GE</button>
        <button className='btn btn-secondary ml-2' onClick={this.gnHandler}>GN</button>
      </div>
    )
  }
}

export default Message