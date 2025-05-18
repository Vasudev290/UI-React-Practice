import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)

//React Element
// const heading = React.createElement("h1", { id: "heading" }, "Hello Vasu 🚀");
// console.log(heading);

//JSX  => is HTML or xml Like systex
//JSX is transpiled before it reaches the js engine  => transpiling done by parcel

//with using babel transpiler ( convertor )
//JSX => Babel/transpiler => React.crateElement => ReactElement => js object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀🚀</h1>;
console.log(jsxHeading);

//React Components;
// -Class Based Components 
// -Functional Components

//normal component
const title =  (
  <div id="container">
    <h1 id="heading">Hello Welcome to React component Topics</h1>
  </div>
)
const Title =  () => (
  <div id="container">
    <h1 id="heading">Hello Welcome to React component Topics</h1>
  </div>
)

//Function Comp
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title/>
      {Title()}
      <Title></Title>
      {title}
      <h1 id="heading">Namaste React from functional Components 🚀🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
