import React, { Component } from 'react'

class Plusminus extends Component {
    state={
        qty:1
    }
    decrHandler= ()=> {
        this.setState({qty:this.state.qty -1})
    }
    incrHandler= ()=> {
        this.setState({qty:this.state.qty +1})
    }
  render() {
    return (
      <div>
        <h2>Increament & Decrement</h2>
       
        <button onClick={this.decrHandler} className='btn btn-danger ml-2'>Decr</button> {this.state.qty}
        <button onClick={this.incrHandler} className='btn btn-success ml-2'>Incr</button>
      </div>
    )
  }
}

export default Plusminus