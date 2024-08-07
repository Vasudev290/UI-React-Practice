import React, { Component } from 'react'

export class Emp extends Component {
  render(props) {
    return (
      <div>
        <h2>Emp Component</h2>
        <h2>Emp Id: {this.props.id}</h2>
        <h2>Emp Name: {this.props.Name}</h2>
      </div>
    )
  }
}

export default Emp