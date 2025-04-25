//<h2 id="title">Hello React</h2>

//First step to javaScript
const heading = document.createElement('h2')
heading.id = "title"
heading.innerText = "Hello React App";

// const container = document.getElementById("app")
// container.appendChild(heading)


//Second Topic React and React dom API Methods
//console.log(React, ReactDOM)

//Third step
const heading1 = React.createElement('h1', {id: "title"}, "Hello React App")

console.dir(heading)  //Here we can use .log also
console.log(heading1)

console.log(ReactDOM)

//forth step
const root = ReactDOM.createRoot(container)
root.render(heading1)