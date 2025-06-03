import React from "react";

class UserClass extends React.Component {
  // Props
  constructor(props) {
    super(props);
    //console.log(props)
    

    //Local State Variable in class Componenet
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        
      }
    };
    console.log("Child Constructor");
  }

  // componentDidMount() {
  //       console.log("Child Component Did Mount");
  //     }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Vasudev290");
    const jsonData = await data.json()

    this.setState({
      userInfo: jsonData
    })
    console.log(jsonData)
  }
      
  componentDidUpdate(){
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    console.log("Component will unmaounted")
  }
  render() {
    console.log("Child Render");
    // Props Destucturing
    //const { name, loc, email } = this.props;

    //State Destucturing
    //const { count, count1 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo
    return (
      <div className="p-2 border border-black">
        {/* <h2>Count: {count}</h2>{" "}
        <button
          onClick={() => {
            //Never update state variable direactly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Incr
        </button>
        <h3>Count1: {this.state.count1}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 10,
            });
          }}
        >
          Count1 Incr
        </button> */}

        {/* <h2>Name: {this.props.name}</h2>
        <h3>Location: {loc}</h3>
        <h2>Contact: {email}</h2> */}
        <img src={avatar_url} className="w-24 h-24 rounded-full mx-auto mb-4"/>
        <h2 className="text-lg font-bold">Name: {name}</h2>
        <h3 className="text-base text-gray-700">Location: {location}</h3>
        <h2 className="text-lg font-bold">Contact: {}</h2>
      </div>
    );
  }
}

export default UserClass;
