import React, { Component } from 'react'

export class Student extends Component {
  render(props) {
    return (
      <div>
       <h1>Student Component</h1>
        <h2>Sudent ID:{this.props.id}</h2>
        <h2>Sudent Name:{this.props.name}</h2>
        
      </div>
    )
  }
}

export default Student