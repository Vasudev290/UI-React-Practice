import React, { Component } from 'react'

class Mesaage1 extends Component {
    state={
        Msg: "Hello..!"
    }
    gmHanler= ()=> {
        this.setState({Msg: "Good Morning... Dear"})
    }
    gaHanler= ()=> {
        this.setState({Msg:"Good After Noon Had Lunch"})
    }
    gnHanler= ()=> {
        this.setState({Msg:"Good Night Sweet Dreams"})
    }
  render() {
    return (
      <div>
        <h2>Message Compnonet</h2>
        <h3>Value: {this.state.Msg}</h3>
        <button onClick={this.gmHanler} className='btn btn-primary ml-1'>GM</button>
        <button onClick={this.gaHanler} className='btn btn-secondary ml-1'>GA</button>
        <button onClick={this.gnHanler} className='btn btn-success ml-1'>GN</button>
      </div>
    )
  }
}

export default Mesaage1