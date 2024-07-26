import React from "react";
class Message extends React.Component{
   //Message="Hello"
   state ={
       Message:"Hello"
   }
   GmHandler= ()=>{
        this.setState({Message:"Good Morning...!"})
   }
   GnHandler= ()=>{
        this.setState({Message:"Good Night....!"})
   }
    render(){
        return<div>
            <h2>Message</h2>
            <hr />
            <h3>Message:{this.state.Message}</h3>
            <button onClick={this.GmHandler}>GM</button>
            <button onClick={this.GnHandler}>GN</button>
        </div>
    }
}
export default Message