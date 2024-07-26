import React from "react";
class Message extends React.Component{
   Message="Hello"
   
   GmHandler =()=>{
    this.Message = "Good Morning"
    //console.log(this.Message);
    this.forceUpdate()
   }
   GnHandler =()=>{
    this.Message = "Good Night"
    //console.log(this.Message);
    this.forceUpdate()
   }
    render(){
        return<div>
            <h2>Message</h2>
            <hr />
            <h3>Message:{this.Message}</h3>
            <button onClick={this.GmHandler}>GM</button>
            <button onClick={this.GnHandler}>GN</button>
        </div>
    }
}
export default Message