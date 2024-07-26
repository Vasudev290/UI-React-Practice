import React, { Component } from 'react'
class Message1 extends Component {
    eid=320;
    ename="Aravind";
    loc=["Chennai","New Delhi","Bangalore"]
    Details={sal:45000,Avail:false}
render() {
    return (
      <div>
        <h2>Assignment</h2>
        <hr/>
        <h3>Employee ID:{this.eid}</h3>
        <h3>Employee Name:{this.ename}</h3>
        <h3>Employee Location:{this.loc[0]}</h3>
        <h3>Employee Deatils:{JSON.stringify(this.Details)}</h3>

      </div>
    )
  }
}

export default Message1