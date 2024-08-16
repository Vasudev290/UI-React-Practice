import React, { Component } from 'react'

export class Message3 extends Component {
    constructor(props){
        super(props)
        this.state={
            Msg:"Vanakkam Daw Maplee...!"
        }
    }
    updateHandler= (Value)=> {
        this.setState({Msg:Value})
    }
  render() {
    return (
      <div>
        <h2>Bind Method | OneHandler</h2>
        <h2>Wish Message:{this.state.Msg}</h2>
        <button className='btn btn-primary' onClick={this.updateHandler.bind(this,"Good Morning Heroooo...!")}>GM</button>
        <button className='btn btn-secondary ml-2'onClick={this.updateHandler.bind(this,"Good Afternooon maple...!")}>GA</button>
        <button className='btn btn-success ml-2' onClick={this.updateHandler.bind(this,"Good Night...yakkkooo..!")}>GN</button>
      </div>
    )
  }
}

export default Message3