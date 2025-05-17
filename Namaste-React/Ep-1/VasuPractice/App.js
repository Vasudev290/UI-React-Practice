// const heading = React.createElement('h1', {id: 'heading'}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// like this way
/*
<div id="parent">
      <div id="child">
         <h1>I'm H1 tag</h1>
         <h2>I'm H1 tag</h2>
      </div>
      <div id="child2">
         <h1>I'm H1 tag</h1>
         <h2>I'm H1 tag</h2>
      </div>
</div> 
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I'm h1 tag"),
    React.createElement("h2", {}, "Hi I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I'm h1 tag"),
    React.createElement("h2", {}, "Hi I'm h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

