import React, { Component } from 'react'

class CompB extends Component {
  render() {
    return (
      <div>
        <h2>CompB</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee id:{this.props.Employee_id}</h3>
        <h3>Employee Name:{this.props.Employee_Name}</h3>
        <h3>Employee Details :{this.props.Employee_Details}</h3>
       
     </div>
    )
  }
}

export default CompB