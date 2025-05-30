import React from "react";
import User from "../Components/User";
import UserClass from "../Components/UserClass";

class About extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount")
    }
  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>About Page</h1>
        <h4>This is my about page</h4>
        {/* <User
          name={"Vasu Dev (functional)"}
          loc={"Banagalore"}
          email={"Vasu@gmail.com"}
        /> */}
        {/* <UserClass
          name={"Vasu Dev (class)"}
          loc={"Banagalore"}
          email={"Vasu@gmail.com"}
        /> */}
        <UserClass
          name={"Vasu Dev (class)"}
          loc={"Banagalore"}
          email={"Vasu@gmail.com"}
        />
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <h4>This is my about page</h4>
//             <User name={"Vasu Dev (functional)"} loc={"Banagalore"} email={"Vasu@gmail.com"}/>
//             <UserClass  name={"Vasu Dev (class)"} loc={"Banagalore"} email={"Vasu@gmail.com"}/>
//         </div>
//     )
// };




export default About;
