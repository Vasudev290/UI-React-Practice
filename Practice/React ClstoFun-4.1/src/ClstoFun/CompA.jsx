import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
    Eid=345
    Ename="Arjun"
    EDetails={
        loc:"Bangalore",
        Email:"arjun@gmail.com",
        Pin:560075
    }
  render() {
    return (
      <div>
        <h2>CompA</h2>
        <hr />
        <CompB Employee_id={this.Eid} Employee_Name={this.Ename} Employee_Details={this.EDetails.loc}/>
     </div>
    )
  }
}

export default CompA