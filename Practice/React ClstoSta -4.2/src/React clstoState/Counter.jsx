import React from "react";
class Counter extends React.Component{
 
    state={
        counter:1
    }
    IncrHandler= ()=>{
        this.setState({counter:this.state.counter +1})
    }
    DecrHandler= ()=>{
        this.setState({counter:this.state.counter -1})
    }
    render() {
        return<div>
            <h1>Counter Compnoent</h1>
            <h2>Counter Value:{this.state.counter}</h2>
            <button onClick={this.DecrHandler}>Decr</button> 
            <button onClick={this.IncrHandler}>Incr</button>
        </div>
    }
}
export default Counter